import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    this.slides = [
      {
        title: "Welcome to Ilkomerz Juara",
        description: "<b>Ilkomerz Juara</b> adalah platform menyalurkan <b>kontribusi</b> mahasiswa aktif Ilmu Komputer IPB lewat \
                      <b>title juara</b>, <b>partisipasi</b> dalam acara kompetitif baik internal maupun eksternal, dan <b>komunitas</b> \
                      yang ada di Ilkom IPB",
        image: 'assets/img/logoilkomerzjuara.png',
      },
      {
        title: "Dashboard",
        description: " Anda akan menemukan informasi terkini terkait <b>aktivitas HIMALKOM</b>, <b>info lomba</b>, \
                      serta <b>artikel-artikel</b> mengenai teknologi yang sedang berkembang.",
        image: 'assets/img/logoilkomerzjuara.png',
      },
      {
        title: "Leaderboard",
        description: "Telusuri terus hasil <b>perolehan poin</b> yang didapatkan \
                      dari <b>prestasi</b> dan <b>kontribusi</b> Ilkomerz untuk Departemen Ilmu Komputer IPB.",
        image: 'assets/img/Leaderboard.png',
      },
      {
        title: "Hall of Fame",
        description: "Anda akan menemukan <b>informasi terkini</b> terkait \
                      <b>prestasi</b> dan <b>kontribusi</b> Ilkomerz untuk Departemen Ilmu Komputer IPB.",
        image: 'assets/img/logoilkomerzjuara.png',
      }
    ];
    // translate.get(["TUTORIAL_SLIDE1_TITLE",
    //   "TUTORIAL_SLIDE1_DESCRIPTION",
    //   "TUTORIAL_SLIDE2_TITLE",
    //   "TUTORIAL_SLIDE2_DESCRIPTION",
    //   "TUTORIAL_SLIDE3_TITLE",
    //   "TUTORIAL_SLIDE3_DESCRIPTION",
    // ]).subscribe(
    //   (values) => {
    //     console.log('Loaded values', values);
    //     this.slides = [
    //       {
    //         title: values.TUTORIAL_SLIDE1_TITLE,
    //         description: values.TUTORIAL_SLIDE1_DESCRIPTION,
    //         image: 'assets/img/ica-slidebox-img-1.png',
    //       },
    //       {
    //         title: values.TUTORIAL_SLIDE2_TITLE,
    //         description: values.TUTORIAL_SLIDE2_DESCRIPTION,
    //         image: 'assets/img/ica-slidebox-img-2.png',
    //       },
    //       {
    //         title: values.TUTORIAL_SLIDE3_TITLE,
    //         description: values.TUTORIAL_SLIDE3_DESCRIPTION,
    //         image: 'assets/img/ica-slidebox-img-3.png',
    //       }
    //     ];
    //   });
  }

  startApp() {
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
