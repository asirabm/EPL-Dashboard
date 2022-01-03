package com.match;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="match")
@Table(name="match")
public class Match {
	@Id
	private long id;
	private String season;
	private LocalDateTime dateTime;
	private String homeTeam;
	private String awayTeam;
	private String FTHG;
	private String FTAG;
	private String FTR;
	
	private String HTAG;
	private String HTR;
	private String Referee;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSeason() {
		return season;
	}
	public void setSeason(String season) {
		this.season = season;
	}
	
	public LocalDateTime getDateTime() {
		return dateTime;
	}
	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}
	public String getHomeTeam() {
		return homeTeam;
	}
	public void setHomeTeam(String homeTeam) {
		this.homeTeam = homeTeam;
	}
	public String getAwayTeam() {
		return awayTeam;
	}
	public void setAwayTeam(String awayTeam) {
		this.awayTeam = awayTeam;
	}
	public String getFTHG() {
		return FTHG;
	}
	public void setFTHG(String fTHG) {
		FTHG = fTHG;
	}
	public String getFTAG() {
		return FTAG;
	}
	public void setFTAG(String fTAG) {
		FTAG = fTAG;
	}
	public String getFTR() {
		return FTR;
	}
	public void setFTR(String fTR) {
		FTR = fTR;
	}
	public String getHTAG() {
		return HTAG;
	}
	public void setHTAG(String hTAG) {
		HTAG = hTAG;
	}
	public String getHTR() {
		return HTR;
	}
	public void setHTR(String hTR) {
		HTR = hTR;
	}
	public String getReferee() {
		return Referee;
	}
	public void setReferee(String referee) {
		Referee = referee;
	}
	
	
	
}