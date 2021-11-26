package com.backend.backend.Customer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Customer {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;

  private String first_name;

  private String last_name;

  private String email;

  private String company;

  public Customer() {
  }

  public Customer(String first_name, String last_name, String email, String company) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.company = company;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getFirst_name() {
    return first_name;
  }

  public void setFirst_name(String first_name) {
    this.first_name = first_name;
  }

  public String getLast_name() {
    return last_name;
  }

  public void setLast_name(String last_name) {
    this.last_name = last_name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }

  @Override
  public String toString() {
    return "Customer [company=" + company + ", email=" + email + ", first_name=" + first_name + ", id=" + id
        + ", last_name=" + last_name + "]";
  }

}