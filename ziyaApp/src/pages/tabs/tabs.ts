import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FabuPage }from '../fabu/fabu';
import { MyPage } from '../my/my';
import{RegistPage} from '../regist/regist'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = HomePage;
  tab2Root = FabuPage;
  tab3Root = AboutPage;
  tab4Root=ContactPage;
  tab5Root=MyPage;




  constructor() {

  }
}
