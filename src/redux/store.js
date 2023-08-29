import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./form/index";
import VehicleSlice from "./vehicle/index";
import ContactSlice from "./contact/index";
import ServicesSlice from "./services/index";
import BlogSlice from "./blog/index";
import SeoSlice from "./seo/index";

export const store = configureStore({
  reducer: {
    form: FormSlice,
    vehicle: VehicleSlice,
    contact: ContactSlice,
    services: ServicesSlice,
    blog: BlogSlice,
    seo: SeoSlice,
  },
});
