package com.Controller;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.match.Match;
import com.match.MatchRepo;
import com.match.model.Team;
import com.match.model.TeamRepo;

@RestController

public class TeamController {
	@Autowired
	TeamRepo teamrepo;
	
	
	@Autowired
	MatchRepo matchrepo;
 
	@GetMapping("/team/{teamName}")
	
	public Team getTemaInfo(@PathVariable String teamName) {
		String output = teamName.substring(0, 1).toUpperCase() + teamName.substring(1);
		System.out.println("Name:"+output);
		Pageable pageable=PageRequest.of(0, 4);
		Optional<Team> team=teamrepo.findByName(output);
		Team team1=team.get();
	      team1.setMatches(matchrepo.getByHomeTeamOrAwayTeamOrderByDateTimeDesc(output, output,pageable));
		return team1;
		
	}
	
	@GetMapping("/team/{teamName}/matches")
	public List<Match> getMatches(@PathVariable("teamName") String teamName, @RequestParam("season") String season) {
		System.out.println(teamName+" "+season);
		String output = teamName.substring(0, 1).toUpperCase() + teamName.substring(1);
	//	List<Match> listmatch=matchrepo.getBySeasonAndHomeTeamOrAwayTeam(season,output,output);
	     List<Match> li1=matchrepo.findBySeasonAndAwayTeam(season, output);
	     List<Match> li2=matchrepo.findBySeasonAndHomeTeam(season, output);
	     li1.addAll(li2);
	     Collections.sort(li1, Comparator.comparingLong(Match::getId));
		//listmatch.forEach(t->System.out.println(t.getSeason()));
		
		return li1;
	}
	
	
	@GetMapping("team/seasons")
	public List<String> getSeason(){
		List<String> listSeason=matchrepo.findAllDistinctSeasons();
		return listSeason;
	}
	
	@GetMapping("team/seasons/{team}")
	public List<String> getSeasonByTeam(@PathVariable("team") String HomeTeam){
		System.out.println("By Season");
		List<Match> listSeason=matchrepo.findAllDistinctSeasonsByHomeTeamOrAwayTeam(HomeTeam,HomeTeam);
		
		List<String> li=listSeason.stream().map(l->l.getSeason()).distinct().collect(Collectors.toList());
		
		li.forEach(t->System.out.println(t));
		
		List<Match> listSeason2=matchrepo.getByHomeTeamOrAwayTeam(HomeTeam, HomeTeam);
	
		return li;
	}
	
	
	
	@GetMapping("/team")
	public List<Team> getAllTeam(){
		
		List<Team> teamNamesList=teamrepo.findAll();
		return teamNamesList;
	}
	
	
	
	
}
