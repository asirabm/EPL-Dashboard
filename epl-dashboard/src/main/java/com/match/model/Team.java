package com.match.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.match.*;

@Entity
public class Team {
	@Transient
	private List<Match> matches;
	
	
	
	
	public List<Match> getMatches() {
		return matches;
	}



	public void setMatches(List<Match> matches) {
		this.matches = matches;
	}



	public Team() {
		
	}
	
	
	
 public Team(String name, long totalMatches) {
		super();
		this.name = name;
		this.totalMatches = totalMatches;
	}
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
 private long id;


 @Override
public String toString() {
	return "Team [name=" + name + ", totalWin=" + totalWin + ", totalMatches=" + totalMatches + "]";
}
 
 
private String name;
 private long totalWin;
 private long totalMatches;
 private long TotalDraws;
 private long TotatLost;
 
 
 
public long getTotatLost() {
	return TotatLost;
}



public void setTotatLost(long totatLost) {
	TotatLost = totatLost;
}



public long getTotalDraws() {
	return TotalDraws;
}



public void setTotalDraws(long totalDraws) {
	TotalDraws = totalDraws;
}



public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public long getTotalWin() {
	return totalWin;
}
public void setTotalWin(long totalWin) {
	this.totalWin = totalWin;
}
public long getTotalMatches() {
	return totalMatches;
}
public void setTotalMatches(long totalMatches) {
	this.totalMatches = totalMatches;
}
	
}
