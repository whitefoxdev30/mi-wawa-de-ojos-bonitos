import { asset } from "../utils/paths";

export const Tulips = () => {
    return (
        <div className="tulips-container">

            {/* LADO IZQUIERDO */}
            <div className="tulip-side left">
                <img src={asset("images/tulip1.png")} className="tulip small" />
                <img src={asset("images/tulip2.png")} className="tulip medium" />
                <img src={asset("images/tulip4.png")} className="tulip big" />
                <img src={asset("images/tulip1.png")} className="tulip medium offset1" />
                <img src={asset("images/tulip2.png")} className="tulip small" />
                <img src={asset("images/tulip4.png")} className="tulip big " />
                <img src={asset("images/tulip1.png")} className="tulip big " />
                <img src={asset("images/tulip1.png")} className="tulip small" />
     

            </div>

            {/* LADO DERECHO */}
            <div className="tulip-side right">
                <img src={asset("images/tulip1.png")} className="tulip small" />
                <img src={asset("images/tulip2.png")} className="tulip medium" />
                <img src={asset("images/tulip4.png")} className="tulip big" />
                <img src={asset("images/tulip1.png")} className="tulip medium offset1" />
                <img src={asset("images/tulip2.png")} className="tulip small" />
                <img src={asset("images/tulip4.png")} className="tulip big " />
                
            </div>

        </div>
        
        
    );
};
