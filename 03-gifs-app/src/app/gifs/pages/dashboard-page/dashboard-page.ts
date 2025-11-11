import { GifSideMenu } from './../../components/gif-side-menu/gif-side-menu';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet,GifSideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage { }
