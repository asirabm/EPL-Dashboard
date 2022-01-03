package com.example.batchprocessing;

import javax.sql.DataSource;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.batch.item.file.mapping.FieldSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties.Job;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import com.match.Match;
import com.match.MatchInput;

@Configuration
@EnableBatchProcessing
public class BatchConfiguration {
	private final String[] fName=new String[] {
	"id","season","DateTime","HomeTeam","AwayTeam","FTHG","FTAG","FTR","HTHG","HTAG","HTR","Referee","HS","AS","HST","AST","HC","AC","HF","AF","HY","AY","HR","AR"
	
	};

  @Autowired
  public JobBuilderFactory jobBuilderFactory;

  @Autowired
  public StepBuilderFactory stepBuilderFactory;

   
  @Bean
  public FlatFileItemReader<MatchInput> reader() {
	  System.out.println("Hello Asir");
    return new FlatFileItemReaderBuilder<MatchInput>()
      .name("personItemReader")
      .resource(new ClassPathResource("results_data.csv"))
      .delimited()
      .names(fName)
      .fieldSetMapper(new BeanWrapperFieldSetMapper<MatchInput>() {{
        setTargetType(MatchInput.class);
      }})
      .linesToSkip(1)
      .build();
  }

  @Bean
  public MatchItemProcessor processor() {
    return new MatchItemProcessor();
  }

  @Bean
  public JdbcBatchItemWriter<Match> writer(DataSource dataSource) {
    return new JdbcBatchItemWriterBuilder<Match>()
      .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
      .sql("INSERT INTO match (id,season,date_Time,home_Team,away_Team,FTHG,FTAG,FTR,HTAG,HTR,Referee)"+ "VALUES (:id,:Season,:DateTime,:HomeTeam,:AwayTeam,:FTHG,:FTAG,:FTR,:HTAG,:HTR,:Referee)")
      .dataSource(dataSource)
      .build();
  }
  
  @Bean
  public org.springframework.batch.core.Job importUserJob(JobCompletionNotificationListener listener, Step step1) {
    return 
       jobBuilderFactory
      .get("importUserJob")
      .incrementer(new RunIdIncrementer())
      .listener(listener)
      .flow(step1)
      .end()
      .build();
  }

  @Bean
  public Step step1(JdbcBatchItemWriter<Match> writer) {
    return stepBuilderFactory.get("step1")
      .<MatchInput, Match> chunk(10)
      .reader(reader())
      .processor(processor())
      .writer(writer)
      .build();
  }
  
  
  
  
  
  
  

}