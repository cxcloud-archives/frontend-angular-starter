import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  defaultLang = 'en';

  constructor(private translate: TranslateService) {
    this.initTranslate();
  }

  initTranslate() {
    // Fallback when a translation isn't found
    this.translate.setDefaultLang(this.defaultLang);
  }
}
