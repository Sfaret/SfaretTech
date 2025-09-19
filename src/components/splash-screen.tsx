
"use client";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background animate-fade-out" style={{animationFillMode: 'forwards', animationDuration: '0.5s', animationDelay: '1.5s'}}>
      <div className="animate-pulse">
        <div className="flex items-center gap-2 mb-4">
            <span className="text-4xl font-bold font-headline text-primary">SFARET</span>
        </div>
      </div>
       <p className="text-muted-foreground mt-2">Revitalizing the Educational Ecosystem...</p>
    </div>
  );
};

export default SplashScreen;
