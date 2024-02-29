import React from "react";
import "../index.css";
import iconface from "../assets/iconos/facebook.png";
import iconig from "../assets/iconos/instagram.png";

function Redes_cont() {
    return (
        <div className="w-full flex justify-around">
            <div>
                <a
                    href="#"
                    role="alert"
                    className="alert min-w-44 max-w-48 mb-3 hover:shadow-lg"
                >
                    <svg
                        className="w-10 h-10"
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
                            fill="#a0420b"
                        />
                    </svg>
                    <div>
                        <h3 className="font-bold link-hover hover:text-amber-800">
                            Dirección
                        </h3>
                        <div className="text-xs">Calle 4, Las Javillas</div>
                    </div>
                </a>
                <a
                    href="#"
                    role="alert"
                    className="alert min-w-44 max-w-48 mb-3 hover:shadow-lg"
                >
                    <svg
                        className="w-10 h-10"
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.0068 15.6364L13.0138 13.6293C13.4508 13.1923 14.0418 12.9407 14.6598 12.9337C15.2788 12.9268 15.8745 13.1663 16.3125 13.6043L18.6973 15.9891C19.2099 16.5017 19.2099 17.3327 18.6973 17.8453C17.7061 18.8365 16.2908 19.3489 14.8814 19.0912C14.3397 18.9921 13.7542 18.8696 13.3401 18.7357C12.6174 18.5021 11.8595 18.2503 10.5862 17.2377C10.0078 16.7777 9.32536 16.1631 8.48846 15.3262C7.65155 14.4893 7.03699 13.8069 6.57697 13.2285C5.56436 11.9552 5.31262 11.1973 5.07898 10.4746C4.94509 10.0605 4.82255 9.47495 4.72349 8.93323C4.46578 7.52391 4.97817 6.10858 5.96939 5.11737C6.48195 4.60481 7.31298 4.60481 7.82554 5.11737L10.2104 7.5022C10.6484 7.94021 10.8879 8.53587 10.881 9.15483C10.874 9.7729 10.6224 10.3639 10.1853 10.8009L8.17833 12.8079C8.53851 13.2232 8.98674 13.7032 9.54912 14.2656C10.1115 14.8279 10.5915 15.2762 11.0068 15.6364ZM7.25109 11.6138L9.12469 9.74025C9.28791 9.57703 9.37857 9.35939 9.38105 9.13798C9.38353 8.91746 9.29863 8.71178 9.14971 8.56286L6.90141 6.31456C6.31294 6.97777 6.04907 7.84341 6.19902 8.66342C6.29735 9.20112 6.40544 9.7014 6.50624 10.0132L6.5138 10.0366C6.66362 10.5001 6.80819 10.9475 7.25109 11.6138ZM12.2008 16.5636C12.8672 17.0065 13.3145 17.1511 13.7781 17.3009C13.7859 17.3034 13.7937 17.3059 13.8015 17.3084C14.1133 17.4092 14.6136 17.5173 15.1513 17.6157C15.9713 17.7656 16.8369 17.5017 17.5001 16.9133L15.2518 14.665C15.1029 14.5161 14.8972 14.4311 14.6767 14.4336C14.4553 14.4361 14.2377 14.5268 14.0744 14.69L12.2008 16.5636Z"
                            fill="#a0420b"
                        />
                    </svg>
                    <div>
                        <h3 className="font-bold link-hover hover:text-amber-800">
                            Teléfono
                        </h3>
                        <div className="text-xs">1+(809)-767-2490</div>
                    </div>
                </a>
            </div>
            <div>
                <a
                    href="#"
                    role="alert"
                    className="alert min-w-44 max-w-48 mb-1 hover:shadow-lg"
                >
                    <div className="indicator p-1 bg-none">
                        <span className="indicator-item w-6">
                            <img src={iconig} alt="icono ig" />
                        </span>
                        <div className="">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold link-hover hover:text-amber-800">
                            Instagram
                        </h3>
                    </div>
                </a>
                <a
                    href="#"
                    role="alert"
                    className="alert min-w-44 max-w-48 mb-1 hover:shadow-lg"
                >
                    <div className="indicator p-1 bg-none">
                        <span className="indicator-item w-6">
                            <img src={iconface} alt="icono ig" />
                        </span>
                        <div className="">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold link-hover hover:text-amber-800">
                            Facebook
                        </h3>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Redes_cont;
