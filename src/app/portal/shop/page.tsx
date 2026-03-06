"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import {
  Search,
  SlidersHorizontal,
  LogOut,
  ShoppingCart,
  User,
  Package,
  X,
  Send,
  CheckCircle,
} from "lucide-react";

interface Buyer {
  email: string;
  name: string;
  company: string;
}

interface CartItem {
  productId: string;
  title: string;
  quantity: number;
  priceRange: string;
}

export default function BuyerShopPage() {
  const router = useRouter();
  const [buyer, setBuyer] = useState<Buyer | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
      })
      .then((data) => setBuyer(data))
      .catch(() => router.push("/portal"))
      .finally(() => setLoading(false));
  }, [router]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/portal");
  }

  function addToCart(productId: string) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          productId,
          title: product.title,
          quantity: 1,
          priceRange: product.priceRange,
        },
      ];
    });
  }

  function removeFromCart(productId: string) {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  }

  function updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }

  async function submitOrder() {
    // In production, this would POST to an order API
    console.log("Order submitted:", { buyer, items: cart });
    setOrderSubmitted(true);
    setTimeout(() => {
      setCart([]);
      setShowCart(false);
      setOrderSubmitted(false);
    }, 3000);
  }

  const filtered = products.filter((p) => {
    const matchCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!buyer) return null;

  return (
    <>
      {/* Portal Header */}
      <section className="bg-primary py-6 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <User size={18} className="text-gold" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                {buyer.name}
              </div>
              <div className="text-gray-400 text-xs">{buyer.company}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCart(true)}
              className="relative flex items-center gap-2 glass text-white text-sm px-4 py-2.5 rounded-xl hover:bg-white/15 transition-all"
            >
              <ShoppingCart size={16} />
              <span className="hidden sm:inline">Order List</span>
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </section>

      {/* Welcome bar */}
      <section className="bg-emerald/5 border-b border-emerald/10 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Package size={14} className="text-emerald" />
          <span className="text-emerald font-medium">
            Welcome back! Browse our latest juniors &amp; missy inventory below.
          </span>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 px-4 bg-white border-b border-border sticky top-[65px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <SlidersHorizontal
              size={16}
              className="text-muted shrink-0 hidden md:block"
            />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-gray-100 text-muted hover:bg-gray-200 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="text"
              placeholder="Search inventory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:border-accent bg-gray-50 focus:bg-white transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 bg-gray-50/50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <>
              <p className="text-sm text-muted mb-8">
                Showing {filtered.length} item{filtered.length !== 1 && "s"}
                {activeCategory !== "All" && (
                  <>
                    {" "}
                    in{" "}
                    <span className="font-medium text-primary">
                      {activeCategory}
                    </span>
                  </>
                )}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="relative">
                    <ProductCard {...product} />
                    <button
                      onClick={() => addToCart(product.id)}
                      className="mt-2 w-full bg-primary text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-primary-light transition-colors uppercase tracking-wider flex items-center justify-center gap-1.5"
                    >
                      <ShoppingCart size={13} />
                      Add to Order
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-muted text-lg mb-2">No items found</p>
              <p className="text-sm text-muted">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Cart Slide-over */}
      {showCart && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowCart(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-fade-up">
            {/* Cart header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart size={18} className="text-primary" />
                <h2 className="font-bold text-primary text-lg">
                  Order List ({cart.length})
                </h2>
              </div>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-6">
              {orderSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-emerald" />
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">
                    Order Request Sent!
                  </h3>
                  <p className="text-sm text-muted">
                    Our team will confirm pricing and availability within 24 hours.
                  </p>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart
                    size={40}
                    className="text-gray-200 mx-auto mb-4"
                  />
                  <p className="text-muted text-sm">
                    Your order list is empty
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.productId}
                      className="flex gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-primary line-clamp-2 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-accent font-semibold">
                          {item.priceRange} /unit
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="text-muted hover:text-accent transition-colors"
                        >
                          <X size={14} />
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 bg-white border border-border rounded-lg flex items-center justify-center text-sm hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.quantity + 1
                              )
                            }
                            className="w-7 h-7 bg-white border border-border rounded-lg flex items-center justify-center text-sm hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && !orderSubmitted && (
              <div className="p-6 border-t border-border">
                <p className="text-xs text-muted mb-4">
                  Final pricing will be confirmed by your account rep based on
                  order volume and lot availability.
                </p>
                <button
                  onClick={submitOrder}
                  className="w-full bg-accent text-white font-semibold py-4 rounded-xl hover:bg-accent-hover transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                >
                  <Send size={16} />
                  Submit Order Request
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
