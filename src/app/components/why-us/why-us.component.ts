import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
})
export class WhyUsComponent {
  datas: { title: string; content: string }[] = [
    { title: 'Tidak tau', content: 'Saya tidak tau apa aja..' },
    {
      title: 'Dapat bahagia',
      content: 'Jalan-jalan membuat bahagia, apalagi gratis',
    },
    { title: 'Dapat makan', content: 'Dapat makanan enak' },
    { title: 'Dapat minum', content: 'Dapat minuman segar..' },
  ];
}
