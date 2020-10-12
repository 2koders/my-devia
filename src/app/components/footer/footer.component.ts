import { Component, OnInit } from '@angular/core';
// import { faInstagram, faFacebook, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'dev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyYear: number;
  // facebook = faFacebook;
  // instagram = faInstagram;
  // twitter = faTwitter;
  // youtube = faYoutube;
  // whatsapp = faWhatsapp;
  // phone = faPhone;
  // mail = faEnvelope;
  // location = faMapMarkerAlt;

  constructor() { 
    this.copyYear = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
