import { Component } from '@angular/core';
declare var videojs: any;
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  ngAfterViewInit(): void {
    var player = videojs('my-video', {
      controls: true,
      playbackRates: [0.5, 1, 1.5, 2],
      plugins: {
        hotkeys: {
          seeksteps: 30
        },
      },
    });
  }
}
