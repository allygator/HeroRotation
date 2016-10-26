
package pagecrawler;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;
import java.io.InputStream;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.file.*;
import java.nio.file.attribute.*;
import org.apache.commons.io.FileUtils;
import java.util.*;

public class PageCrawler {
    static ArrayList<Hero> Heroes = new ArrayList<Hero>();
    static File html = new File("pageHTML.txt");
    static File javascript = new File("D:\\Users\\Alyssa\\Documents\\GitHub\\HeroRotation\\heroes.js");
    static String date = "";
    static String heroesVar = "var heroesArr = [";
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter(new FileWriter(html));
        String[] heroes = {"Zarya","Alarak","Auriel","Guldan","Medivh","Chromie","Tracer","Dehaka",
            "Xul","Li-Ming","Greymane","Lunara","Cho'gall","Artanis","Lt.Morales","Rexxar",
            "Kharazim","Leoric","The-Butcher","Johanna","Kael'thas","Sylvanas","The Lost Vikings",
            "Thrall","Jaina","Anub'arak","Azmodan","Chen","Rehgar","Zagara","Murky","Brightwing",
            "LiLi","Tychus","Abathur","Arthas","Diablo","ETC","Falstad","Gazlowe","Illidan",
            "Kerrigan","Malfurion","Muradin","Nazeebo","Nova","Raynor","Sgt-Hammer",
            "Sonya","Stitches","Tassadar","Tyrael","Tyrande","Uther","Valla","Zeratul"};
        Scanner sc = new Scanner(System.in);
        System.out.println("Hero Info (info), Free Heroes Update (free), or Hero Images (images)?");
        String choice = sc.next();
        choice.toLowerCase();
        while(choice.compareTo("free")!=0&&choice.compareTo("info")!=0&&choice.compareTo("images")!=0){
            System.out.println("Please make a valid choice.");
            System.out.println("Hero Info (info), Free Heroes (free), or Hero Images (images)?");
            choice = sc.next();
        }
        if(choice.compareTo("info")==0){
            for(int i = 0;i<heroes.length;i++){
                heroes[i] = heroes[i].toLowerCase();
                heroes[i] = heroes[i].replace("'","");
                heroes[i] = heroes[i].replace(" ","-");
                heroes[i] = heroes[i].replace(".","-");
                getHeroInfo(heroes[i]);
            }
            createFile(1);
        } else if (choice.compareTo("free")==0){
            checkFreeHeroes();
        } else if (choice.compareTo("images")==0){
            for(int i = 0;i<heroes.length;i++){
                String lowerCase = heroes[i];
                heroes[i] = heroes[i].toLowerCase();
                heroes[i] = heroes[i].replace("'","");
                heroes[i] = heroes[i].replace(" ","-");
                heroes[i] = heroes[i].replace(".","-");
                getHeroInfo(heroes[i]);
            }
            getImages();
            
        }
        System.out.println("Got all the heroes!");
        //For debugging, prints Hero Arraylist
        /*for(int i =0;i<Heroes.size();i++){
            out.println(Heroes.get(i).getName());
            for(int j = 0;j<Heroes.get(i).getAblNames().length;j++){
                out.println(Heroes.get(i).getAblNames()[j]+": "+Heroes.get(i).getAblDescs()[j]);
            }
        }*/
        out.close();
    }
    
    public static void getImages() throws IOException {
        for(int i=0;i<Heroes.size();i++){
            String[] URLs = Heroes.get(i).getBlizzURLS();
            String[] internalURLs = Heroes.get(i).getURLS();
            for(int j=0;j<URLs.length;j++){
                URL img = new URL(URLs[j]);
                String imageURL = internalURLs[j].substring(0,17+Heroes.get(i).getName().length());
                //URL FOR LARGE IMAGES
                //http://us.battle.net/heroes/static/images/heroes/widget/paintovers/heroname.jpg
                System.out.println(imageURL);
                
                try {
                    InputStream in = new BufferedInputStream(img.openStream());
                    File image = new File(imageURL);
                    image.mkdirs();
                    image.setWritable(true);
                    
                    OutputStream out = new BufferedOutputStream(new FileOutputStream(internalURLs[j]));
                    for (int k; (k = in.read()) != -1; ) {
                        out.write(k);
                    }
                
                    in.close();
                    out.close();
                }  catch (FileNotFoundException ex) {
                    System.err.println("File Not Found " + ex.getMessage());
                } catch (IOException ex){
                     System.err.println("Caught IOException: " + ex.getMessage());
                }
            }
        }
    }
    
    public static void getHeroInfo(String heroName) {
        try {
            URL website = new URL("http://us.battle.net/heroes/en/heroes/"+heroName+"/");
            BufferedReader in = new BufferedReader(new InputStreamReader(website.openStream()));
            String inputLine;
            String role = "";
            String[] ablNames;
            String[] ablDescs;
            if(heroName.compareTo("greymane")==0||heroName.compareTo("chogall")==0){
                ablNames = new String[12];
                ablDescs = new String[12];
            } else if(heroName.compareTo("tracer")==0||heroName.compareTo("abathur")==0){
                ablNames = new String[5];
                ablDescs = new String[5];
            } else {
                ablNames = new String[6];
                ablDescs = new String[6];
            }
            String ablName = "", ablDesc="";
            int loc1 = 0, loc2 = 0;
            while ((inputLine = in.readLine()) != null){
                if(inputLine.contains("ability-tooltip__title")){
                    int start = inputLine.indexOf(">")+1;
                    ablName=inputLine.substring(start,inputLine.indexOf("<",start));
                    ablNames[loc1]=ablName;
                    loc1++;
                } else if (inputLine.contains("ability-tooltip__description")){
                    int start = inputLine.indexOf(">")+1;
                    ablDesc=inputLine.substring(start,inputLine.indexOf("<",start));
                    ablDescs[loc2]=ablDesc;
                    loc2++;
                } else if (inputLine.contains("hero-role-icon--")){
                    int start = inputLine.indexOf("hero-role-icon--")+16;
                    role = inputLine.substring(start,inputLine.indexOf("\"",start));
                    role = role.substring(0,1).toUpperCase()+role.substring(1);
                }
            }
            Hero currentHero = new Hero(heroName,ablNames,ablDescs,role);
            Heroes.add(currentHero);
            in.close();
        } catch (FileNotFoundException ex) {
            System.err.println("File Not Found" + ex.getMessage());
        } catch (IOException ex){
             System.err.println("Caught IOException: " + ex.getMessage());
        }
    }
    
    public static void checkFreeHeroes(){
        try {
            
            URL website = new URL("http://us.battle.net/forums/en/heroes/topic/17936383460");
            BufferedReader in = new BufferedReader(new InputStreamReader(website.openStream()));
            String inputLine;
            PrintWriter out = new PrintWriter(new FileWriter(html));
            boolean found = false;
            String[] heroes = new String[10];
            
            //Reading through the html until we get to a post
            while ((inputLine = in.readLine()) != null && found==false){
                
                //System.out.println("reading in website");
                //Found the post
                if(inputLine.contains("bodyContent")){
                    //System.out.println(inputLine);
                    found = true;
                    //The date is in the format Month Day - Month Day, Year. I dont need year.
                    int dateStart = inputLine.indexOf(":")+1;
                    int dateEnd = inputLine.indexOf(",");
                    //Creating the substring of the positions of date
                    date = inputLine.substring(dateStart,dateEnd);
                    //System.out.println("Date: " + date);
                    //Trimming trailing spaces that may appear
                    date=date.trim();
                    //The hero rotation list is on a single line of html with the <ul><li>Content</li> format
                    int heroStart=0,heroEnd=0;
                    for(int i = 0;i<10;i++){
                        //System.out.println(i);
                        if(i<=5){
                            heroStart = inputLine.indexOf("<li>",heroEnd)+4;
                            heroEnd = inputLine.indexOf("<",heroStart);
                            
                        } else if(i>5){
                            heroStart = inputLine.indexOf("<li>",heroEnd)+4;
                            heroEnd = inputLine.indexOf("(",heroStart)-1;
                        }
                        //System.out.println(heroStart+" , "+heroEnd);
                        String hero = inputLine.substring(heroStart,heroEnd);
                        //System.out.println(hero);
                        heroes[i]=hero;
                        //System.out.println(heroes[i]);
                        
                    }
                    //After the first 5 heroes, heroes have descriptions so this part cuts out that discription
                    /*for(int i = 5;i<10;i++){
                        String hero = inputLine.substring(heroStart,heroEnd);
                        heroes[i]=hero;
                        
                        heroStart = inputLine.indexOf("<li>",heroEnd)+4;
                        heroEnd = inputLine.indexOf("(",heroStart)-1;
                    }*/
                    //Adds in the quotes and comma for the javascript
                    for(int i = 0;i<10;i++){
                        heroesVar = heroesVar.concat("\""+heroes[i]+"\",");
                    }
                    //Adds closing bracket for the javascript
                    heroesVar = heroesVar.substring(0, heroesVar.length()-1);
                    heroesVar = heroesVar.concat("];");
                    
                }
            }
            //Setting the date variable to include the javascript
            date = "var currWeekDate = \"" + date +"\";";
            //Closes the website stream
            in.close();
            out.close();
            
            createFile(2);
        } catch (FileNotFoundException ex) {
            System.err.println("File Not Found " + ex.getMessage());
        } catch (IOException ex){
             System.err.println("Caught IOException: " + ex.getMessage());
        }
    }
    
    public static void createFile(int choice) throws IOException {
        //System.out.println("Creating File, with choice: " + choice);
        PrintWriter out = new PrintWriter(new FileWriter(html));
        BufferedReader in = new BufferedReader(new FileReader(javascript));
        String inputLine;
        //Creating a file with the changes that need to be made if hero info was selected
        if(choice==1){
            while((inputLine = in.readLine()) != null){
                if(inputLine.contains("//Heroes-Arrays")){
                    out.println(inputLine);
                    out.println();
                    break;
                }
                out.println(inputLine);
            }
            for (int i=0;i<Heroes.size();i++) {
                String str = Heroes.get(i).getName();
                str = str.replace("-","");
                //System.out.println("var " + str + " = {");
                out.println("var " + str + " = {");
                for(int j = 0;j<Heroes.get(i).getAblNames().length;j++){
                    switch (j){
                        case 0: out.println("\t\"heroic1\":[");
                            break;
                        case 1: out.println("\t\"heroic2\":[");
                            break;
                        case 2: out.println("\t\"q\":[");
                            break;
                        case 3: out.println("\t\"w\":[");
                            break;
                        case 4: out.println("\t\"e\":[");
                            break;
                        case 5: out.println("\t\"trait\":[");
                            break;
                    }
                    out.println("\t\t[\"url\",\""+Heroes.get(i).getURLS()[j]+"\"],");
                    out.println("\t\t[\"abilityName\",\""+Heroes.get(i).getAblNames()[j]+"\"],");
                    out.println("\t\t[\"abilityDesc\",\""+Heroes.get(i).getAblDescs()[j]+"\"]");
                    if(j==Heroes.get(i).getAblNames().length) {
                        out.println("\t]");
                    } else {
                        out.println("\t],");
                    }
                }
                out.println("\t\"type\":\""+Heroes.get(i).getRole()+"\"");
                out.println("};");
            }
        //Creating a file with the changes that need to be made if free hero was selected
        } else if(choice==2) {
            
            while((inputLine = in.readLine()) != null){
                //System.out.println(inputLine);
                if(inputLine.contains("currWeekDate")){
                    if(inputLine.compareTo(date)!=0 && !(inputLine.contains("#"))){
                        //Once the correct line for the variable currWeekDate, print the new date line
                        out.println(date);
                        continue;
                    }
                } else if (inputLine.contains("heroesArr")&&!(inputLine.contains("("))){
                    if(inputLine.compareTo(heroesVar)!=0){
                        //Once the heroesArr has been found (where the current list of free heroes is) print the new free heroes list
                        out.println(heroesVar);
                        continue;
                    }
                }
                //Just print the rest of the javascript file to the html file
                out.println(inputLine);
            }
        }
        //Close the printwriter and filereader
        out.close();
        in.close();
        //Create the final javascript file
        createJavascriptFile();
    }
    
    public static void createJavascriptFile() throws IOException {
        //Reading from accurate html file and writing that to the javascript file
        BufferedReader in = new BufferedReader(new FileReader(html));
        PrintWriter out = new PrintWriter(new FileWriter(javascript));
        String inputLine;
        //Copy the html file to the javascript file
        while((inputLine = in.readLine()) != null){
            out.println(inputLine);
        }
        /*if(FileUtils.contentEquals(javascript,html)){
            System.out.println("ERROR ERROR");
        }*/
        html.deleteOnExit();
        in.close();
        out.close();
    }
}
