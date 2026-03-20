import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBookingClick: () => void;
}

const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
  return (
    <section className="pt-24 sm:pt-36 pb-12 sm:pb-24 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-blue-200/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs sm:text-sm mb-4 sm:mb-6 shadow-md">
              ✨ 17 лет опыта
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-extrabold mb-4 sm:mb-6 leading-[1.1] text-foreground">
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Для вашего здоровья</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed">
              Индивидуальный подход к офисным сотрудникам, спортсменам и беременным. 
              Безопасные методики с доказанной эффективностью.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button onClick={onBookingClick} size="lg" className="bg-accent hover:bg-accent/90 transition-all duration-300 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                Записаться на консультацию
              </Button>
            </div>
            <div className="mt-4">
              <a href="https://massopro.ru/catalog/1" target="_blank" rel="noopener"
                style={{display:"inline-flex",flexDirection:"column",textDecoration:"none",
                        fontFamily:"system-ui,sans-serif",maxWidth:"300px",width:"100%",
                        background:"linear-gradient(160deg,#f8fafc 0%,#f0f7ff 100%)",
                        border:"1px solid #e2eaf5",borderRadius:"20px",
                        boxShadow:"0 8px 32px rgba(13,162,231,0.10),0 1px 4px rgba(0,0,0,0.06)",
                        overflow:"hidden"}}>
                <div style={{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                    <img src="https://cdn.poehali.dev/projects/08a371f8-54a3-463b-ba90-37bf9bcbd421/bucket/59ee2a21-9d72-4798-89a9-280f70bcac0b.png"
                         alt="МассоПРО" style={{width:"44px",height:"44px",objectFit:"contain",flexShrink:0}} />
                    <div style={{minWidth:0,flex:1}}>
                      <p style={{margin:0,fontSize:"13px",fontWeight:700,color:"#0f172a",letterSpacing:"-0.01em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>Остеопат +</p>
                    </div>
                  </div>
                  <div style={{height:"1px",background:"linear-gradient(90deg,#e2eaf5,transparent)"}}></div>
                  <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                    <span style={{fontSize:"15px",letterSpacing:"1px",color:"#f59e0b"}}>★★★★★</span>
                    <span style={{fontSize:"15px",fontWeight:800,color:"#0f172a"}}>5.0</span>
                    <span style={{fontSize:"11px",color:"#94a3b8"}}>/5</span>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:"8px",background:"rgba(13,162,231,0.06)",borderRadius:"10px",padding:"6px 10px"}}>
                    <span style={{fontSize:"11px",fontWeight:600,color:"#0da2e7",letterSpacing:"0.01em"}}>Сертифицировано МассоПРО</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="animate-scale-in relative mt-8 md:mt-0">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-2xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/2291e50a-e4f9-49ca-908b-8a23aef3bb4f.png" 
              alt="Остеопат Сергей"
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full premium-shadow relative z-10 border-2 sm:border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;