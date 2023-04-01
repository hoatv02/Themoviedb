import React from "react"

const LeaderBoard = () => {
  return (
    <div className="flex justify-center">
      <section className="mb-[10px] max-w-[1320px] flex flex-wrap justify-center items-start content-start w-full">
        <div className="flex w-full justify-center items-start">
          <div className="max-w-[1320px] flex items-start content-start w-full px-[40px] py-[30px]">
            <div className="w-full">
              <div className="flex justify-start items-center">
                <h2 className="mr-[20px] whitespace-nowrap text-[1.5em] font-semibold">Leaderboard</h2>
                <div>
                  <p className="flex items-center p-0 m-0 text-[0.9em]">
                    <span className="rounded-[50%] inline-block w-[8px] h-[8px] mr-[10px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"></span>
                    All Time Edits
                  </p>
                  <p className="flex items-center p-0 m-0 text-[0.9em]">
                    <span className="rounded-[50%] inline-block w-[8px] h-[8px] mr-[10px] bg-gradient-to-r from-[#fdc170] to-[#d93b63]"></span>
                    Edits This Week
                  </p>
                </div>
              </div>

              <div className="pt-[20px]">
                <ol className="w-full m-0 p-0 list-none list-inside flex flex-wrap">
                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <span className="flex items-center justify-center w-full h-full rounded-[50%] bg-[#d29001] text-white text-[18px] uppercase leading-[48px]">
                        R
                      </span>
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">RuiZafon</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[58.41531507577772%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">360,308</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[100%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">13,258</h4>
                      </div>
                    </div>
                  </li>

                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <img
                        src="https://www.gravatar.com/avatar/e995808687effb8cc260b87374b69e10.jpg?s=64"
                        alt="heli5m"
                        className="rounded-[50%]"
                      />
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">cerpt</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[6.464776493018852%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">39,3875</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[87.94689998491478%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">11,660</h4>
                      </div>
                    </div>
                  </li>

                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <img
                        src="https://www.gravatar.com/avatar/3af6511cf44a709e6ae5b612903c846c.jpg?s=64"
                        alt="heli5m"
                        className="rounded-[50%]"
                      />
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">Heli5m</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[100%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">616,804</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px]  bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[58.41531507577772%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">360,308</h4>
                      </div>
                    </div>
                  </li>

                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <span className="flex items-center justify-center w-full h-full rounded-[50%] bg-[#0177d2] text-white text-[18px] uppercase leading-[48px]">
                        V
                      </span>
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">Victoriacamp</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[2.529491010111044%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">22,663</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px]  bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[100%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">11,922</h4>
                      </div>
                    </div>
                  </li>

                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <img
                        src="https://www.gravatar.com/avatar/a20e3e628661df46913fb6a42bcbcc6c.jpg?s=64"
                        alt=""
                        className="rounded-[50%]"
                      />
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">Patrik Selen</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[1.7260988603171379%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">15.465</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px]  bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[58.41531507577772%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">7.189</h4>
                      </div>
                    </div>
                  </li>

                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <img
                        src="https://www.themoviedb.org/t/p/w64_and_h64_face/uLymqezuEofuopySXKyCCT8t1kW.jpg"
                        alt=""
                        className="rounded-[50%]"
                      />
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">Kampfkeks</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[4.838099404989782%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">43.347</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px]  bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[42.016607951685955%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">4.890</h4>
                      </div>
                    </div>
                  </li>

                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <span className="flex items-center justify-center w-full h-full rounded-[50%] bg-[#0177d2] text-white text-[18px] uppercase leading-[48px]">
                        M
                      </span>
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">Magicus</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[27.46154644617842%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">246.042</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px]  bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[41.016607951685955%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">4,890</h4>
                      </div>
                    </div>
                  </li>

                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <span className="flex items-center justify-center w-full h-full rounded-[50%] bg-[#d29001] text-white text-[18px] uppercase leading-[48px]">
                        I
                      </span>
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">Insafsiz</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[0.9074156957244314%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">8.130</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px]  bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[58.41531507577772%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">4.696</h4>
                      </div>
                    </div>
                  </li>
                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <img
                        src="https://www.themoviedb.org/t/p/w64_and_h64_face/hjvyN4SrXqXy316GkbOshW8sGXJ.jpg"
                        alt=""
                        className="rounded-[50%]"
                      />
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">talestalker</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[100%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">895.951</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px]  bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[31.87384667002181%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">3.800</h4>
                      </div>
                    </div>
                  </li>
                  <li className="pr-[40px] p-0 m-0 flex items-center w-[50%] mb-[20px]">
                    <span className="min-w-[56px] w-[56px] h-[56px] mr-[10px]">
                      <span className="flex items-center justify-center w-full h-full rounded-[50%] bg-[#01c6ac] text-white text-[18px] uppercase leading-[48px]">
                        J
                      </span>
                    </span>
                    <div className="w-full flex items-center flex-wrap content-center">
                      <h3 className="text-[1.2em] leading-[1px] m-0 p-0 font-semibold mb-[10px]">Jinbcvx</h3>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] w-[15.984467900588314%%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">143.213</h4>
                      </div>
                      <div className="mt-[6px] w-full h-[8px] flex items-center">
                        <div className="h-full min-w-[40px] rounded-[4px]  bg-gradient-to-r from-[#fcbc70] to-[#db4264] w-[31.47122965945311%]"></div>
                        <h4 className="ml-[10px] text-[0.9em] m-0 p-0">3.752</h4>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LeaderBoard
