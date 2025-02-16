import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project-confess';
  version = 2;
  floatingEmojis: string[] = ['❤️', '💌', '💖', '💘', '🏹', '💞', '❤️', '🏹','💌', '💖','💘'];
  yesButtons: { id: number, top: string, left: string }[] = [];
  warningMsg = false;
  private buttonId = 0;
  nthClick = 0;
  titleOfLetter : string = 'The Confession💌';
  from : string = 'Eren';
  to : string = 'Mikasa❤️';
  letter : string = '';
  letter2 : string = '';
  question : string = 'Mikasa, What am I to you?';
  yesMsg : string = 'You are my most beloved, my dear.🤍';
  noMsg : string = 'Well, You are my family';

  maybeButtonPosition: { top: number; left: number } = { top: 0, left: 0 };

  @ViewChild('miniContainer', { static: false }) miniContainer!: ElementRef;

  onYesClick() {
    alert('Rumbling plan Cancelled ❤️;)');
    window.location.href = "mailto:s.mageshwar01@gmail.com?subject=ConfessionResponse&body=YES!";
  }

  onMaybeLaterClick() {
    this.warningMsg = true;
    // Add 3 new "Yes" buttons with random positions
      var dist = 1;
      this.nthClick = this.nthClick +1;
      if (this.nthClick < 3) {
        dist = 250;
      }else if(this.nthClick < 6){
        dist = 100;
      }else{
        dist = 15;
      }
      const rect = this.miniContainer.nativeElement.getBoundingClientRect();
      for (let i = 0; i < 3; i++) {
        const randomOffsetX = Math.random() * (rect.width - dist); // Ensure buttons fit within container
        const randomOffsetY = Math.random() * (rect.height + dist );

        this.yesButtons.push({
          id: this.buttonId++,
          top: `${Math.random() * randomOffsetY}%`,
          left: `${Math.random() * randomOffsetX}%`
        });
      }
    
  }

  onMaybeLaterHover(){
    // Randomly move the button within a 200px x 200px area inside the mini-container
    const maxX = 400;
    const maxY = 250;
    this.maybeButtonPosition.top = Math.random() * maxY;
    this.maybeButtonPosition.left = Math.random() * maxX;

    // Apply the new position using CSS custom properties
    document.documentElement.style.setProperty(
      '--maybe-button-top',
      `${this.maybeButtonPosition.top}px`
    );
    document.documentElement.style.setProperty(
      '--maybe-button-left',
      `${this.maybeButtonPosition.left}px`
    );
  }
  
}
