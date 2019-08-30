package javabasic.week2;

public class Sungjuk {
	private int c;
	private int cpp;
	private int java;
	private int python;
	private int html;
	
	private int sum;
	private double avg;
	
	public Sungjuk(int c, int cpp, int java, int python, int html) {
		this.c = c;
		this.cpp = cpp;
		this.java = java;
		this.python = python;
		this.html = html;
		
		this.sum = c + cpp + java + python + html;
		this.avg = sum / 5.0;
	}
	
	public void printSungjuk() {
		System.out.println("c: " + getC() + ", cpp: " + getCpp() + ", java: " + getJava()
							+ ", python: " + getPython() + ", html: " + getHtml());
		System.out.println("총점: " + getSum() + ", 평균: " + getAvg());
	}
	
	public int getC() {
		return this.c;
	}
	
	public int getCpp() {
		return this.cpp;
	}
	
	public int getJava() {
		return this.java;
	}
	
	public int getPython() {
		return this.python;
	}
	
	public int getHtml() {
		return this.html;
	}
	
	public int getSum() {
		return this.sum;
	}
	
	public double getAvg() {
		return this.avg;
	}
}
