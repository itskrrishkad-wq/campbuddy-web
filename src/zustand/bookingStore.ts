import { create } from "zustand";

interface BookingStore {
  open: boolean;
  destinationParam?: "pawna" | "panshet";
  packageIdParam?: string;

  openBooking: (destination?: "pawna" | "panshet", packageId?: string) => void;

  closeBooking: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  open: false,
  destinationParam: undefined,
  packageIdParam: undefined,

  openBooking: (destination, packageId) =>
    set({
      open: true,
      destinationParam: destination,
      packageIdParam: packageId,
    }),

  closeBooking: () =>
    set({
      open: false,
      destinationParam: undefined,
      packageIdParam: undefined,
    }),
}));
