import React, { useEffect, useRef } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Sparkles } from 'lucide-react';
import { useCart } from '../hooks/useCart.js';
import { formatINR } from '../utils/formatters.js';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartCount,
    subtotal,
    shippingFee,
    total,
    remainingForFreeShipping,
    freeShippingProgress,
    showToast,
  } = useCart();

  const drawerRef = useRef(null);

  // Keyboard accessibility: ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    showToast('Demo Checkout: Real payments are disabled for this preview!');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      {/* Dark Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-date-brown/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          ref={drawerRef}
          className="w-screen max-w-md bg-salt border-l border-salt-dark shadow-warm-lg flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-5 bg-date-brown text-salt flex items-center justify-between border-b border-honey-gold/20">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag className="w-5 h-5 text-honey-gold" />
              <h2 id="cart-drawer-title" className="font-serif text-xl font-bold">
                Your Harvest Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-salt/80 hover:text-salt hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-honey-gold"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-palm-green/10 p-4 border-b border-palm-green/20">
            <div className="flex items-center justify-between text-xs font-semibold text-palm-green mb-1.5">
              <span className="flex items-center space-x-1">
                <Truck className="w-4 h-4" />
                <span>
                  {remainingForFreeShipping > 0
                    ? `Add ${formatINR(remainingForFreeShipping)} more for FREE Express Shipping!`
                    : '🎉 You have unlocked FREE Express Shipping!'}
                </span>
              </span>
              <span>{Math.round(freeShippingProgress)}%</span>
            </div>
            <div className="w-full bg-salt-dark h-2 rounded-full overflow-hidden">
              <div
                className="bg-palm-green h-full transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length > 0 ? (
              cart.map((item) => {
                const weightLabel = item.weight >= 1000 ? '1 kg' : `${item.weight} g`;
                return (
                  <div
                    key={item.cartItemId}
                    className="bg-white rounded-xl p-3.5 border border-salt-dark shadow-xs flex items-center space-x-3"
                  >
                    {/* Item Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg bg-salt flex-shrink-0"
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h3 className="font-serif text-sm font-bold text-date-brown truncate">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-date-brown/40 hover:text-red-600 transition-colors p-1 ml-1"
                          aria-label={`Remove ${item.name} ${weightLabel} from cart`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-date-brown/60 mb-2">
                        Pack size: <span className="font-semibold text-palm-green">{weightLabel}</span>
                      </div>

                      {/* Quantity Controls & Line Total */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 bg-salt px-2 py-1 rounded-lg border border-salt-dark">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, -1)}
                            className="text-date-brown/70 hover:text-date-brown p-0.5"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-date-brown w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, 1)}
                            className="text-date-brown/70 hover:text-date-brown p-0.5"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif text-sm font-bold text-date-brown">
                          {formatINR(item.lineTotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              /* Empty Cart State */
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-palm-green/10 text-palm-green flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-xl font-bold text-date-brown">
                  Your cart is empty
                </h3>
                <p className="text-sm text-date-brown/70 max-w-xs">
                  Looks like you haven't added any fresh dates to your basket yet.
                </p>
                <a
                  href="#shop"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center space-x-2 bg-honey-gold hover:bg-honey-gold-light text-date-brown font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors"
                >
                  <span>Browse dates</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-salt-dark space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-date-brown/80">
                  <span>Subtotal</span>
                  <span className="font-semibold text-date-brown">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-date-brown/80">
                  <span>Shipping</span>
                  <span className="font-semibold text-palm-green">
                    {shippingFee === 0 ? 'FREE' : formatINR(shippingFee)}
                  </span>
                </div>
                <div className="pt-2 border-t border-salt-dark flex justify-between text-base font-bold text-date-brown">
                  <span>Total</span>
                  <span className="font-serif text-xl text-palm-green">{formatINR(total)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-honey-gold hover:bg-honey-gold-light text-date-brown font-bold py-3.5 rounded-xl shadow-gold flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Proceed to Checkout</span>
              </button>

              <p className="text-[10px] text-center text-date-brown/50">
                🔒 Safe & encrypted checkout • Demo e-commerce store
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
