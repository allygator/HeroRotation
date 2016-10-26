package pagecrawler;


public class Hero {

    String name;
    String[] ablNames;
    String[] ablDescs;
    String[] urls;
    String[] blizzURLs;
    String role;

    public Hero(String name, String[] ablNames, String[] ablDescs, String role){
        this.name = name;
        this.ablNames = ablNames;
        this.ablDescs = ablDescs;
        urls = new String[ablNames.length];
        blizzURLs = new String[ablNames.length];
        createURLs();
        createBlizzUrls();
        this.role = role;
    }

    public void createURLs() {
        for(int i = 0;i<ablNames.length;i++){
            String tempName = name;
            String tempAblName = ablNames[i].replace(" ","");
            tempAblName = tempAblName.replace("'","");
            tempAblName = tempAblName.replace("-","");
            tempAblName = tempAblName.replace(",","");
            tempAblName = tempAblName.substring(0,1).toLowerCase()+tempAblName.substring(1);
            urls[i] = "assets/abilities/" +name+"/"+name+"_"+tempAblName+".png";
        }
    }
    
    public void createBlizzUrls(){
        for(int i = 0;i<ablNames.length;i++){
            String tempName = name;
            String tempAblName = ablNames[i].replace(" ","");
            tempAblName = tempAblName.replace("'","");
            tempAblName = tempAblName.replace("-","");
            tempAblName = tempAblName.substring(0,1).toLowerCase()+tempAblName.substring(1);
            blizzURLs[i] = "http://us.battle.net/heroes/static/images/heroes/skills/icons/"+name+"_"+tempAblName+".png";
        }
    }

    public String getName(){
        return name;
    }

    public String getRole(){
        return role;
    }

    public String[] getAblNames(){
        return ablNames;
    }

    public String[] getAblDescs(){
        return ablDescs;
    }

    public String[] getURLS(){
        return urls;
    }
    
    public String[] getBlizzURLS(){
        return blizzURLs;
    }

}
