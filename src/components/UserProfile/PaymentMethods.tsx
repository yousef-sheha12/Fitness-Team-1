import { CreditCard, Plus } from "lucide-react";

export default function PaymentMethods() {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <h2 className="text-xl sm:text-3xl font-bold text-white">
        Payment Methods
      </h2>

      <div className="border border-(--gray-color) rounded-xl p-4 sm:p-6 flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-4 p-8">
          <div className="flex-1 bg-[#0f1f3d] rounded-2xl p-6 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center justify-between">
              <CreditCard size={28} className="text-white" />
              <span className="text-white font-bold text-lg tracking-widest">
                VISA
              </span>
            </div>

            <div className="flex flex-col gap-1 mt-4">
              <span className="text-xs text-white/50">Card Number</span>
              <span className="text-white tracking-widest">
                •••• •••• •••• 4242
              </span>
            </div>

            <div className="flex items-end justify-between mt-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50">Card Holder</span>
                <span className="text-white font-medium">Mohamed Alaa</span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-xs text-white/50">Expires</span>
                <span className="text-white font-medium">12/25</span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-(--lightGrey-color) border border-(--gray-color) rounded-2xl p-6 flex flex-col items-center justify-center gap-3 min-h-[160px] cursor-pointer hover:bg-(--gray-color)/20 transition-colors">
            <div className="w-12 h-12 rounded-full bg-(--gray-color)/40 flex items-center justify-center">
              <Plus size={22} className="text-white" />
            </div>
            <span className="text-white text-xl font-semibold">
              Add New Card
            </span>
            <span className="text-sm text-(--gray-color)">
              Supports Visa, Mastercard, AMEX
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
