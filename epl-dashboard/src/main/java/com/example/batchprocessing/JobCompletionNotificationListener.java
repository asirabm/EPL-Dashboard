package com.example.batchprocessing;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.match.Match;
import com.match.model.Team;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);
  @Autowired
  private final EntityManager em;
  
  

  @Autowired
  public JobCompletionNotificationListener(EntityManager entityManager) {
    this.em = entityManager;
  }

  @Override
  @Transactional
  public void afterJob(JobExecution jobExecution) {
    if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("!!! JOB FINISHED! Time to verify the results");
     //  Map<String,Team> teamDate=new HashMap<>();
      
      Map<String,Team> teamData = new HashMap<String,Team>();
      List<Object[]> listteam=em.createQuery("SELECT DISTINCT (e.homeTeam), count(*)FROM match e group by e.homeTeam").getResultList();
      listteam.stream().map(t->new Team((String)t[0],(long)t[1]))
      .forEach(team->teamData.put(team.getName(), team));
      
      
    
      List<Object[]> listteam2=em.createQuery("SELECT DISTINCT (e.awayTeam), count(*)FROM match e group by e.awayTeam").getResultList();
      listteam2.stream().forEach(
    		  e->{
    			  Team team=teamData.get((String)e[0]);
    			  team.setTotalMatches(team.getTotalMatches()+(long)e[1]);
    		  }
    		  
    		  );
      
     /// System.out.println(teamData);
    
      List<Object[]> listteam3=em.createQuery("SELECT DISTINCT (e.awayTeam), count(*)FROM match e where e.FTR='A' group by e.awayTeam").getResultList();
      
      listteam3.stream().forEach(t->{
    	  Team team=teamData.get((String)t[0]);
    	  team.setTotalWin((long)t[1]);
      });
      
      
    List<Object[]> listteam4=em.createQuery("SELECT DISTINCT (e.homeTeam), count(*)FROM match e where e.FTR='H' group by e.homeTeam").getResultList();
      
    listteam4.stream().forEach(t->{
  	  Team team=teamData.get((String)t[0]);
  	  team.setTotalWin(team.getTotalWin() + (long)t[1]);
    });
    
    
    List<Object[]> listteam5=em.createQuery("SELECT DISTINCT (e.awayTeam), count(*)FROM match e where e.FTR='D' group by e.awayTeam").getResultList();
    
    listteam5.stream().forEach(t->{
  	  Team team=teamData.get((String)t[0]);
  	  team.setTotalDraws((long)t[1]);
    });
    List<Object[]> listteam6=em.createQuery("SELECT DISTINCT (e.awayTeam), count(*)FROM match e where e.FTR='D' group by e.awayTeam").getResultList();
    
    listteam6.stream().forEach(t->{
  	  Team team=teamData.get((String)t[0]);
  	  team.setTotalDraws((long)t[1]);
    });
    
    
    
    
    
    
      
    teamData.values().forEach(t->em.persist(t));      
    teamData.values().forEach(t->System.out.println(t));   
 
 
 
 
 
 
 
 
 
 
 System.out.println(teamData.get("Arsenal").getTotalMatches());  
 System.out.println(teamData.get("Arsenal").getTotalWin());  
 System.out.println(teamData.get("Arsenal").getTotalDraws());   
    }
  }
}
