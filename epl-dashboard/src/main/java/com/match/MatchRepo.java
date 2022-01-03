package com.match;

import java.util.List;

import org.hibernate.annotations.Sort;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MatchRepo extends JpaRepository<Match,Long> {
	List<Match> getByHomeTeamOrAwayTeamOrderByDateTimeDesc(String home,String away,Pageable pageable);

	//List<Match> getBySeasonAndHomeTeamOrAwayTeam(String season,String home,String away);
	List<Match> findBySeasonAndAwayTeam(String season,String away);
	List<Match> findBySeasonAndHomeTeam(String season,String home);
	@Query("select distinct season from match")
	List<String> findAllDistinctSeasons();
	
	
	List<Match> findAllDistinctSeasonsByHomeTeamOrAwayTeam(String home,String away); 
	
	
	List<Match> getByHomeTeamOrAwayTeam(String h,String a);
	
	
}
