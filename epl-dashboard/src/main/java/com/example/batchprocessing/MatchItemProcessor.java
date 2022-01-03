package com.example.batchprocessing;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

import com.match.Match;
import com.match.MatchInput;

public class MatchItemProcessor implements ItemProcessor<MatchInput, Match> {
	private static final Logger log = LoggerFactory.getLogger(MatchItemProcessor.class);

	@Override
	public Match process(MatchInput item) throws Exception {
		Match m=new Match();
		m.setId(Long.parseLong(item.getId()));
		//System.out.println(m.getId());
		m.setSeason(item.getSeason());
		//SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy"); 
		
		m.setDateTime(LocalDateTime.parse(item.getDateTime()));
		m.setHomeTeam(item.getHomeTeam());
		m.setAwayTeam(item.getAwayTeam());
		m.setFTAG(item.getFTAG());
		m.setFTHG(item.getFTHG());
		m.setFTR(item.getFTR());
		m.setHTAG(item.getFTAG());
		m.setHTR(item.getHTR());
		m.setReferee(item.getReferee());
		//log.info("Converting (" + "MatchInput" + ") into (" + "transformedPerson" + ")");
		return m;
	} 

}
