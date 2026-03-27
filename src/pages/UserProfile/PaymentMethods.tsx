import { Plus } from "lucide-react";

export default function PaymentMethods() {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Payment Methods
        </h2>
        <p className="text-sm text-(--gray-color) mt-1">
          Manage your saved cards and payment options
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        {/* Credit Card */}
        <div className="flex-1 relative bg-gradient-to-br from-[#1a3a6b] via-[#0f2348] to-[#0a1628] rounded-3xl p-7 flex flex-col justify-between min-h-[220px] shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-white text-lg font-bold tracking-wide">
                Premium Card
              </span>
            </div>
            <span className="text-white font-black text-2xl italic tracking-wider">
              VISA
            </span>
          </div>

          <div className="relative flex flex-col gap-1 mt-2">
            <span className="text-xs text-white/40 uppercase tracking-widest">
              Card Number
            </span>
            <span className="text-white text-lg tracking-[0.25em] font-medium">
              •••• •••• •••• 4242
            </span>
          </div>

          <div className="relative flex items-end justify-between mt-2">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-white/40 uppercase tracking-widest">
                Card Holder
              </span>
              <span className="text-white font-semibold text-base">
                Mohamed Alaa
              </span>
            </div>
            <div className="flex items-end gap-6">
              <div className="flex flex-col gap-0.5 text-right">
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  Expires
                </span>
                <span className="text-white font-semibold">12/25</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add New Card */}
        <div className="flex-1 border-2 border-dashed border-(--gray-color)/40 rounded-3xl p-7 flex flex-col items-center justify-center gap-4 min-h-[220px] cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-(--gray-color)/10 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300">
            <Plus
              size={26}
              className="text-(--gray-color) group-hover:text-primary transition-colors duration-300"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-white text-lg font-bold group-hover:text-primary transition-colors duration-300">
              Add New Card
            </span>
            <span className="text-sm text-(--gray-color) text-center">
              Visa, Mastercard, AMEX
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
