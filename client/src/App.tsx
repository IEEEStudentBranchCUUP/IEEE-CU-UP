import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Events from "@/pages/Events";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import Members from "@/pages/MemberCard";
import Register from "@/pages/register";
import Guidelines from "@/pages/guide";

/* ================= POPUP IMPORTS (DELETE AFTER INAUGURATION) ================= */
import { useState, useEffect } from "react";
/* ============================================================================ */

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/members" component={Members} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/guide" component={Guidelines} />
      <Route path="/join" component={Register} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  /* ================= POPUP STATE (DELETE AFTER INAUGURATION) ================= */
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);
  /* ============================================================================ */

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        {/* ================= POPUP UI (DELETE AFTER INAUGURATION) ================= */}
        {showPopup && (
          <div style={overlayStyle}>
            <div style={imageContainer}>
              <button
                style={closeBtn}
                onClick={() => setShowPopup(false)}
              >
                ✖
              </button>

              <img
                src="/inauguration.png"   // 👉 Make sure image is inside public folder
                alt="IEEE Inauguration"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </div>
          </div>
        )}
        {/* ======================================================================= */}

        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

/* ================= POPUP STYLES (DELETE AFTER INAUGURATION) ================= */

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const imageContainer: React.CSSProperties = {
  position: "relative",
  width: "90%",
  maxWidth: "500px",
};

const closeBtn: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "white",
  border: "none",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  fontWeight: "bold",
};

/* ============================================================================ */
