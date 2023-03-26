
/*  
 git
1. theory
2.install     git     git - scm    
              gitbase me
              git--version      
              git help
3. cd v:
dir
     mkdir dharmgit
     cd dharmgit
     git status         not a git repository
     git init as a git initialize
     git status          on branch master
     git config-- global user.name     if already set dharmendra singh thakur
     git config--global user.name "dharmtechnical"    dharmtechnical
clear
     git config --global user.name    dharmtechnical
     git config --global user.name "dharmendra singh thakur"     dharmendra singh thakur
     git config user.name "singh" 
     git config user.name    singh
     git config --global user.name          dharmendra singh thakur
clear
     git config --global user.email           dsthakur @gmail.com
     git config user.email                    dsthakur @gmail.com
     git config user.email "dharmtechnical.com"
     git config user.email     dharmtechnical
     git config --global user.email           dsthakur @gmail.com
     git config --global user.email           "dsthakur77@gmail.com"
clear
     git config user.name  dharm
     git config user.email

4.  working directory - git add 
                               staging area - git commit
                                                       repository
     cd e:
     cd dharmgit
     git status
     dir
     touch index.html
     dir      index.html
     clear
     notepad index.html         dharm...    ctrl s close
     git status  untracked files:
     git add index.html         red se green
     notepad index.html         dharmsingh...  ctrl s close
     git status                first is staging area but second is modified
      git add .
      git status
      git commit -m "first commit, index file added"
      git status
      got log    git id - commit ke bad hexacode generate hota hai
      git log --oneline
      commit ke 7 letter  starting
      git log --oneline -3        more than 1000 commit for starting 3
    
5.   github is a code hosting platform for version control and collaboration.
     It lets you and others work together on projects from anywhere.
    
      google     github         
                 github.com
                 login dharmendra.developers@gmail.com
                 pass  Dharmendra@#$123
                 start project

                 gitlab
                 about.gitlab.com
                 login dharmendra.developers@gmail.com
                 pass VVw4gfHyJ-p#8jw     or Dharmendra@#$123


6.  mkdir newyoutubegit
    cd newyoutubegit
    dir
    touch index.html
    notepad index.html           Dharmendra Singh thakur     local directory
                                 alias dharmtechnical

    cat index.html               Dharmendra Singh Thakur
                                 alias dharmtechnical

    git status                  owernship in repository at e
    
    git init
                        git config --global user.name  "dharmtechnical"
                        git config --global user.email  "dsthakur1@gmail.com"
    
    git status          on branch master   unsave file
    
    git add .
    git status          on a branch master   new file
    clear
    git commit -m "first commit index added"
    git log
    git log --oneline
    git log --oneline -3
    clear
    git remote      
    gitstatus           nothing to commit , working tree clean               
    
    git remote
    git remote add origin https://gitlab.com/dharmendravlog/demoyoutube.git
                yha origin alias hai origin ya link likhege niche
    git remote      origin aayga
    git remote -v
                  fetch and push
    
    git push -u origin master      online or local ke beech tracking ke liye use 
    
    notepad index.html        Dharmendra Singh Thakur
                              alias dharmtechnical
                              Hope apko samja hoga :)
    git status         modified
    git add .
    git commit -m "new line added" 
    clear
    git status
    git log                  origin/master
    git log --oneline  
    git log --oneline -1       hajaro commit me se sirf ek dikhega top bala
    git log --oneline
    git push -u origin master

7. Branch in Git a branch will allow to make a "copy" while not affecting the original branch
        
        main original project hai - master
        uske under jitne bhi uske locally kam krte hai without effecting original one - local
        cd e:
        cd newyoutubegit
        git branch
        dir  index.html
        cat index.html
        
        git branch            master
        clear
        git branch localdharm             ya name
        
        git branch         lacaldharm
                           master
                           
        git checkout localdharm           localdharm in place master
        dir                            index.html
        cat index.html
        notepad index.html          delete or add line
                                    Dharmendra Singh Thakur

                                    alias dharmtechnical
                                    task is done by localdharm:)
        cat index.html
        git status
        git add .
        git commit -m "task is done by localdharm"
        git push -u origin localdharm
        clear
        git checkout master         master
        cat index.html            no change jabtk master read nhi krega 
                                  dekhega nhi tbtk merge nhi krega
        git merge localdharm       jis branch ko merge krna hai
                               merge by using fast-forword method
        cat index.html            change ho jayga local ke according
                                   but remote me nhi hua
        git push -u origin master

8.      clone in git   git clone is used to create a local 
                       copy of a remote repository
                       
                       ese folder per kam kr rhe hai jisko abhi tk as a git
                       initialize nhi kiya as a git repository nhi banaya hai
                       sirf ek folder banake rakh diya hai or ham chahte hai 
                       online  project ko access krne ke liye clone use krege
        cd e:
        mkdir newclonegit
        cd newclonegit
        git status
        git clone https://gitlab.com/dharmendravlog/demoyoutube.git
        git log --oneline
        dir      demoyoutube
        cd demoyoutube
        git status
        git log --oneline

9.   git ignore

      cd e:
      cd newyoutubegit
      dir index.html secrets.txt
      ls -a 
      touch .gitignore
      ls -a

      git me                jin file ko duniya se hide krna hai unko
                            gitignore file ke under un file ka nam likhdo 
                            gitignore usko hide kr dega    gitfile<filename>

    git rm --cached <filename>
     git status
     git add .
     clear
     git commit -m "gitignore added"
     git push
     */