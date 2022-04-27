import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendu',
  templateUrl: './pendu.component.html',
  styleUrls: ['./pendu.component.css']
})
export class PenduComponent implements OnInit {

  constructor(private router: Router) { }

  tab: string[] = ['apple', 'Banana', 'avocado', 'orange', 'watermelon'];
  uppercased: string[] = this.tab.map(name => name.toUpperCase());
  clickedButton : boolean[] = [] ;
  random: number = Math.floor(Math.random() * (this.tab.length ));
  mot: string = this.uppercased[this.random];
  size: number = this.mot.length;
  res: string = "";
  hiddenWord: string = ""
  motfixe: string = this.mot;
  hiddenWordArray: string [] = [];
  victory: boolean = false;
  display = "none";
  tentatives: number = 10;

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
    this.reloadPage();
  }
  
  reloadPage() {
    window.location.reload();
  }

  goToMenu(){
    this.router.navigate(['/menu']);
  }

  ngOnInit(): void {
    
    for (let  i=0; i<26; i++) {
      this.clickedButton [i] = false;
    }

    for (let  i=0; i<this.size; i++) {
      this.hiddenWord += "_ ";
    }   
  }

  tentative(s: string, mot: string): void {    
    this.hiddenWordArray = this.hiddenWord.split(' ');      
		if (this.mot.includes(s)) {      
      for (let i=0; i<this.motfixe.length; i++) {
        this.mot = this.mot.replace(s, "");
        if (this.motfixe[i] == s) {
          this.hiddenWordArray[i] = s;    
        }
      }
      this.hiddenWord = this.hiddenWordArray.join(' ');
		} else {
      this.tentatives --;
		}

    if (this.tentatives == 0) {
      this.victory = false;
      this.openModal();
    }	

    if (this.mot == "") {
      this.victory = true;
      this.openModal();
    }
	}

}
