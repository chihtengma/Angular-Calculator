import { bootstrapApplication } from "@angular/platform-browser";

import { AppModule } from "./app/app.module";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// Standalone Component Way
// import { AppComponent } from "./app/app.component";

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Modules Way
platformBrowserDynamic().bootstrapModule(AppModule);
