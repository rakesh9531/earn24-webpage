import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingService } from './services/landing';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  loading: boolean = true;
  details: any = null;
  gallery: any[] = [];
  currentYear: number = new Date().getFullYear();

  // Used for API calls
  baseUrl: string = environment.baseurl;

  // Used for images — prefix for image_url from API
  imageUrl: string = environment.image_url;

  constructor(private landingService: LandingService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.landingService.getLandingData().subscribe({
      next: (res: any) => {
        // API returns: { status: true, data: { details: {...}, gallery: [...] } }
        this.details = res.data?.details || null;
        this.gallery = res.data?.gallery || [];
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error loading page data:', err);
        this.loading = false;
      }
    });
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}