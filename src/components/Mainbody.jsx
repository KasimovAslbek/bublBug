import React, { useEffect, useState } from "react";
import check from '../img/icon-check-white-step.png';
import fourLogo from '../img/safe_check_out_4logo-1.png';
import shield from '../img/shield.png';
import star from '../img/star.png';
import pack1 from '../img/pack-1.png';
import pack2 from '../img/pack-2.png';
import pack3 from '../img/pack-3.png';
import pack4 from '../img/pack-4.png';
import tick2 from '../img/tick-2.png';
import guarantee from '../img/guarantee.png';
import paypalLogo from '../img/paypal-logo.png';
import creditcards from '../img/creditcards.png';

function Mainbody() {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    const scrollToElement = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
    };
  const data = [
    { id: 'three', title: '3X BUG BULBS', qty: 3, total: 89.99, subtotal: 184.57, discount: 76.58, save: 51, imgSrc: pack3 },
    { id: 'one', title: '1X BUG BULBS', qty: 1, total: 39.99, subtotal: 61.52, discount: 21.53, save: 35, imgSrc: pack1 },
    { id: 'two', title: '2X BUG BULBS', qty: 2, total: 75.99, subtotal: 123.05, discount: 47.06, save: 35, imgSrc: pack2 },
    { id: 'four', title: '4X BUG BULBS', qty: 4, total: 119.99, subtotal: 246.09, discount: 110.10, save: 51, imgSrc: pack4 },
  ];

  const [selectedDiv, setSelectedDiv] = useState(0);
  const [displayData, setDisplayData] = useState(data[0]);
  const [reachedPaypalLogo, setReachedPaypalLogo] = useState(false);
  const [reachedPayment, setReachedPayment] = useState(false);
  const [reachedShipping, setReachedShipping] = useState(false);

  const handleClick = (index) => {
    setSelectedDiv(index);
  };

  useEffect(() => {
    const selectedData = data[selectedDiv];
    setDisplayData(selectedData);
  }, [selectedDiv]);

  useEffect(() => {
    const handleScroll = () => {
      const paypalLogoElement = document.getElementById("paypalLogo");
      const paymentElement = document.getElementById("payment");
      const shippingElement = document.getElementById("shipping");

      const { top: paypalTop, height: paypalHeight } = paypalLogoElement.getBoundingClientRect();
      const { top: paymentTop } = paymentElement.getBoundingClientRect();
      const { top: shippingTop } = shippingElement.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      const isPaypalLogoVisible = paypalTop <= windowHeight && paypalTop + paypalHeight >= 0;
      const isPaymentVisible = paymentTop <= windowHeight;
      const isShippingVisible = shippingTop <= windowHeight;

      setReachedPaypalLogo(isPaypalLogoVisible);
      setReachedPayment(isPaymentVisible);
      setReachedShipping(isShippingVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div>
    <div className="sticky lg:hidden top-0 z-20 flex lg:flex-col justify-center pt-4 px-5 pb-11 md:pb-14 md:px-6 bg-gray-50">
      <div className="flex lg:flex-col items-center w-1/3 lg:w-fit">
        <div className="relative">
          <img className="bg-indigo-500 rounded-full py-3 px-2" src={check} alt="" />
          <p className="absolute top-full left-0 text-center mt-1">Select Quantity</p>
        </div>
        <div className="grow h-1.5 mx-2 bg-indigo-500"></div>
      </div>
      <div className="flex lg:flex-col items-center w-1/3 lg:w-fit">
        <div className="relative">
          {reachedShipping ? (
            <img className="bg-indigo-500 rounded-full py-3 px-2" src={check} alt="" />
          ) : (
            <div className="bg-gray-300 rounded-full py-3 px-5 text-2xl text-white font-bold">2</div>
          )}
          <p className="absolute top-full left-0 -ml-2 text-center mt-1">Shipping Information</p>
        </div>
        <div
          className={`grow h-1.5 mx-2 ${reachedShipping ? "bg-indigo-500" : "bg-gray-300"}`}
        ></div>
      </div>
      <div className="flex lg:flex-col items-center w-1/3 lg:w-fit">
        <div className="relative">
          {reachedPayment ? (
            <img className="bg-indigo-500 rounded-full py-3 px-2" src={check} alt="" />
          ) : (
            <div className="bg-gray-300 rounded-full py-3 px-5 text-2xl text-white font-bold">3</div>
          )}
          <p className="absolute top-full left-0 text-center mt-1">Payment</p>
        </div>
        <div
          className={`grow h-1.5 mx-2 ${reachedPayment ? "bg-indigo-500" : "bg-gray-300"}`}
        ></div>
      </div>
      <div className="flex lg:flex-col items-center">
        <div className="relative">
          {reachedPaypalLogo ? (
            <img className="bg-indigo-500 rounded-full py-3 px-2" src={check} alt="" />
          ) : (
            <div className="bg-gray-300 rounded-full py-3 px-5 text-2xl text-white font-bold">4</div>
          )}
          <p className="absolute top-full left-0 text-center mt-1">Place Order</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 relative" >
      <div className="hidden lg:flex lg:flex-col items-center absolute ml-14 mt-96 lg:w-fit h-[505px] xl:h-[465px]">
        <div className="relative">
          <img className="bg-indigo-500 rounded-full py-3 px-2" src={check} alt="" />
          <p className="absolute top-full left-0 text-center mt-1 text-2xl -ml-5">Select Quantity</p>
        </div>
        <div className="grow w-1.5 mt-20 bg-indigo-500"></div>
      </div>
      <div className="pt-10 px-6 pb-8 lg:pt-14 lg:pb-16 lg:px-4 lg:ml-52 1.5xl:max-w-[1205px] 1.5xl:mx-auto">
        <div className="hidden md:block w-[497px] h-20 mx-auto px-6 pb-4 rounded-lg border-2 border-black mb-10">
          <div className="flex gap-1 -mt-3 z-20 bg-white w-fit mx-auto px-2">
            <img className="w-5" src={shield} alt="" />
            <p>Secure Checkout</p>
          </div>
          <img className="mx-auto" src={fourLogo} alt="" />
        </div>
        <div id="selectFromFour" className="flex flex-col lg:flex-row items-end justify-center gap-4">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`w-full lg:w-1/4 cursor-pointer ${selectedDiv === index ? 'bg-[#FFFEF4]' : ''}`}
              onClick={() => handleClick(index)}
            >
              {index === 0 && (
                <>
                  <div
                    className={`flex gap-1 items-center justify-center py-2.5 px-1 rounded-t-xl ${
                      selectedDiv === 0 ? 'bg-green-500' : 'bg-[#C49B3F] '
                    }`}
                  >
                    <img className="w-6" src={star} alt="" />
                    <p className="text-white font-bold text-lg">RECOMMENDED DEAL</p>
                  </div>
                  <div
                    className={`grid grid-cols-2 lg:flex lg:flex-col text-center border-4 rounded-b shadow-xl py-5 lg:text-xl ${
                      selectedDiv === 0 ? 'border-green-500' : 'border-[#C49B3F] '
                    }`}
                  >
                    <h2 className="font-bold lg:mt-1 lg:mb-6">{item.title}</h2>
                    <img
                      className="h-[110px] md:h-[120px] lg:h-[168px] mx-auto row-span-3"
                      src={item.imgSrc}
                      alt=""
                    />
                    <p className="line-through">${item.subtotal.toFixed(2)}</p>
                    <p className="text-4xl text-indigo-500 font-bold">${item.total.toFixed(2)}</p>
                    <div className="lg:flex items-center justify-center gap-1 mt-2.5 mb-1 hidden">
                      <img className="w-6" src={tick2} alt="" />
                      <p>Save {item.save}%</p>
                    </div>
                    <div className="hidden lg:flex items-start gap-1 w-3/4 mx-auto">
                      <p>
                        <img className="w-6 inline-block pr-1" src={tick2} alt="" />
                        {item.title === '1X BUG BULBS' ? 'Get' : 'Double'} Your Mosquito Protection
                      </p>
                    </div>
                  </div>
                </>
              )}
              {index !== 0 && (
                <div
                  className={`grid grid-cols-2 lg:flex lg:flex-col text-center border-4 rounded-b shadow-xl py-5 lg:text-xl ${
                    selectedDiv === index ? 'border-green-500' : 'border-inherit '
                  }`}
                >
                  <h2 className="font-bold lg:mt-1 lg:mb-6">{item.title}</h2>
                  <img
                    className="h-[110px] md:h-[120px] lg:h-[168px] mx-auto row-span-3"
                    src={item.imgSrc}
                    alt=""
                  />
                  <p className="line-through">${item.subtotal.toFixed(2)}</p>
                  <p className="text-4xl text-indigo-500 font-bold">${item.total.toFixed(2)}</p>
                  <div className="lg:flex items-center justify-center gap-1 mt-2.5 mb-1 hidden">
                    <img className="w-6" src={tick2} alt="" />
                    <p>Save {item.save}%</p>
                  </div>
                  <div className="hidden lg:flex items-start gap-1 w-3/4 mx-auto">
                    <p>
                      <img className="w-6 inline-block pr-1" src={tick2} alt="" />
                      {item.title === '1X BUG BULBS' ? 'Get' : 'Double'} Your Mosquito Protection
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex justify-center mt-9">
          <button className="bg-green-500 text-white font-bold p-2.5 w-full max-w-sm" onClick={() => scrollToElement('shippingH2')}>
            ORDER NOW
          </button>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="hidden lg:flex lg:flex-col items-center absolute ml-14 mt-16 lg:w-fit h-full z-40">
        <div
          id="shippingDiv"
          className={`flex lg:flex-col items-center h-1/2 lg:w-fit ${reachedShipping ? "reached-shippingDiv" : ""}`}
        >
          <div className="relative">
            {reachedShipping ? (
              <img className="bg-indigo-500 rounded-full py-3 px-2" src={check} alt="" />
            ) : (
              <div className="bg-gray-300 rounded-full py-3 px-5 text-2xl text-white font-bold">2</div>
            )}
            <p className="absolute top-full left-0 text-center mt-1 text-2xl -ml-12">Shipping Information</p>
          </div>
          <div
            className={`grow w-1.5 my-20 ${reachedShipping ? "bg-indigo-500" : "bg-gray-300"}`}
          ></div>
        </div>
        <div
          id="paymentDiv"
          className={`flex lg:flex-col items-center h-1/3 lg:w-fit ${reachedPayment ? "reached-paymentDiv" : ""}`}
        >
          <div className="relative">
            {reachedPayment ? (
              <img className="bg-indigo-500 rounded-full py-3 px-2" src={check} alt="" />
            ) : (
              <div className="bg-gray-300 rounded-full py-3 px-5 text-2xl text-white font-bold">3</div>
            )}
            <p className="absolute top-full left-0 text-center mt-1 text-2xl -ml-7">Payment</p>
          </div>
          <div
            className={`grow w-1.5 my-20 ${reachedPayment ? "bg-indigo-500" : "bg-gray-300"}`}
          ></div>
        </div>
        <div
          id="placeOrder"
          className={`flex lg:flex-col items-center w-1/3 lg:w-fit ${reachedPaypalLogo ? "reached-placeOrder" : ""}`}
        >
          <div className="relative">
            {reachedPaypalLogo ? (
              <img className="bg-indigo-500 rounded-full py-3 px-2" src={check} alt="" />
            ) : (
              <div className="bg-gray-300 rounded-full py-3 px-5 text-2xl text-white font-bold">4</div>
            )}
            <p className="absolute top-full left-0 text-center mt-1 text-2xl -ml-2">Place Order</p>
          </div>
          <div
            className={`grow h-1.5 mx-2 ${reachedPaypalLogo ? "bg-indigo-500" : "bg-gray-300"}`}
          ></div>
        </div>
      </div>
    <div className="px-4 my-7 md:mt-7 md:mb-12 lg:mb-24 max-w-[1205px] mx-auto relative lg:grid lg:grid-cols-2">

        <div className="lg:max-w-[740px] lg:mx-auto mt-6 mb-8 lg:inline-block">
        <div className="lg:max-w-[412px] lg:ml-28 xl:ml-40 ">
            <h2 id="shippingH2" className="text-3xl font-bold">SHIPPING</h2>
            <p className="text-lg font-bold mt-1 mb-4">Enter your contact information:</p>
            <form className="flex flex-col gap-4 w-full">
            <input className="p-2.5 pt-5 border border-[#979797] rounded" type="email" name="" value={inputValue} onChange={handleInputChange} placeholder="Email" aria-invalid="true" required />
            <input className="p-2.5 pt-5 border border-[#979797] rounded" type="text" name="" value={inputValue} onChange={handleInputChange} placeholder="First Name" aria-invalid="true" required />
            <input id="shipping" className="p-2.5 pt-5 border border-[#979797] rounded" type="text" name="" value={inputValue} onChange={handleInputChange} placeholder="Last Name" aria-invalid="true" required />
            <input className="p-2.5 pt-5 border border-[#979797] rounded" type="text" name="" value={inputValue} onChange={handleInputChange} placeholder="Phone Number" aria-invalid="true" required />
            <input className="p-2.5 pt-5 border border-[#979797] rounded" type="text" name="" value={inputValue} onChange={handleInputChange} placeholder="Street Address" aria-invalid="true" required />
            <input className="p-2.5 pt-5 border border-[#979797] rounded" type="text" name="" value={inputValue} onChange={handleInputChange} placeholder="Apt / Suite / Other" aria-invalid="true" required />
            <input className="p-2.5 pt-5 border border-[#979797] rounded" type="text" name="" value="City"  onChange={handleInputChange} placeholder="City" aria-invalid="true" required />
            <input className="p-2.5 pt-5 border border-[#979797] rounded" type="text" name="" value="Country" onChange={handleInputChange} placeholder="Country" aria-invalid="true" required />
            <select className="p-2.5 pt-5 border border-[#979797] rounded" id="cars" name="cars" placeholder="Country" aria-invalid="true" required>
                <option onChange={handleInputChange} value="null">Country</option>
                <option onChange={handleInputChange} value="saab">Canada</option>
                <option onChange={handleInputChange} value="fiat">USA</option>
                <option onChange={handleInputChange} value="audi">England</option>
            </select>
            <div className="flex gap-4">
                <input className="w-1/2 p-2.5 pt-5 border border-[#979797] rounded" type="text" name="" value={inputValue} onChange={handleInputChange} placeholder="State / Province" aria-invalid="true" required />
                <input className="w-1/2 p-2.5 pt-5 border border-[#979797] rounded" type="text" name="" value={inputValue} onChange={handleInputChange} placeholder="Zip / Postal Code" aria-invalid="true" required />
            </div>
            </form>
        </div>
        </div>
        
        <div className="lg:sticky lg:top-0 right-8 mt-20 pt-4 mx-auto">
        <div>
            <div className="lg:border lg:border-yellow-700 lg:rounded lg:shadow-2xl lg:max-w-[400px] overflow-y-hidden" id="orderSummary">
            <h2 className="m-3 mb-5 pt-2.5 text-xl font-bold">ORDER SUMMARY</h2>
            <div className="flex justify-between items-center gap-4 ml-4 mr-7">
                <div className="flex gap-2.5">
                <img className="h-16" src={pack3} alt="" />
                <div>
                    <p className="font-semibold">{displayData.title}</p>
                    <p onClick={() => scrollToElement('selectFromFour')} className="underline cursor-pointer text-[#b4b4b4]">EDIT</p>
                </div>
                </div>
                <div>
                <p className="font-semibold">QTY: {displayData.qty}</p>
                <p className="font-semibold">${displayData.total}</p>
                </div>
            </div>
            <div className="bg-gray-100 rounded mx-4 mt-6 py-2 px-4">
                <div className="flex justify-between py-2">
                <p>Subtotal: </p>
                <p className="font-semibold">${displayData.subtotal}</p>
                </div>
                <div className="flex justify-between py-2">
                <p>Discount:</p>
                <p className="font-semibold text-red-600">-${displayData.discount}</p>
                </div>
                <p className="italic">Shipping and tax will be settled upon checkout confirmation</p>
                <div className="flex justify-between py-2 font-semibold">
                <p>Total:</p>
                <p>${displayData.total}</p>
                </div>
            </div>
            <p className="lg:hidden text-center pt-6">All pricing is in <span className="font-bold">United States Dollars.</span></p>
            <div className="flex ml-7 mt-4 mr-5 mb-9 text-xs items-center">
                <img className="w-[103px] mr-3 h-fit" src={guarantee} alt="" />
                <div>
                <p className="hidden lg:block">All pricing is in <span className="font-bold">United States Dollars.</span></p>
                <p className="py-2.5"><span className="font-bold">30 DAY GUARANTEE: Bug Bulb</span> offers a 30-day guarantee on all unused purchases. Simply send the item(s) back to us in the original unopened packaging for a full refund or replacement, less S&H.</p>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="lg:max-w-[412px] lg:ml-28 xl:ml-40">
        <h2 className="text-3xl font-bold mb-8">PAYMENT</h2>
        <div className="flex justify-center max-w-[412px] mx-auto bg-yellow-400 rounded">
            <button type="">
            <img className="w-24" src={paypalLogo} alt="" />
            </button>
        </div>
        <div className="mt-8 mb-5 relative h-[1.2px] bg-gray-500 max-w-[412px] mx-auto">
            <p className="absolute top-0 -mt-2.5 bg-white ml-28 px-2.5 text-sm">OR PAY WITH CREDIT CARD</p>
        </div>
        <div className="pt-2.5 mb-2.5">
            <p className="mb-4 text-sm">Credit Card Information:</p>
            <img id="payment" src={creditcards} alt="" />
        </div>
        <div className="form-group iaakw69_global">
            <input className="p-2.5 pt-5 border border-[#979797] rounded w-full" name="creditcard" regex="" type="text" mask="0000-0000-0000-0000-000" value={inputValue} onChange={handleInputChange} required autoComplete="cc-number" id="iur6j1c" placeholder='Credit card #' />
            <input className="p-2.5 pt-5 border border-[#979797] rounded w-full my-5" type="text" required autoComplete="cc-number" placeholder='CVV Code' value={inputValue} onChange={handleInputChange} />
        </div>
        <div className="flex justify-between items-center">
            <div className="w-1/3">Expiration</div>
            <div className="flex gap-4 w-2/3">
            <select className="py-2.5 px-1 border border-[#979797] rounded w-full" name="monthddl" regex="" id="monthddl" required autoComplete="cc-exp-month" aria-invalid="false" value="05">
                <option onChange={handleInputChange} value="01" id="iqwhc0k">01 (Jan)</option>
                <option onChange={handleInputChange} value="02" id="ik531he">02 (Feb)</option>
                <option onChange={handleInputChange} value="03" id="i3644e4">03 (Mar)</option>
                <option onChange={handleInputChange} value="04" id="i32stim">04 (Apr)</option>
                <option onChange={handleInputChange} value="05" id="ihvmbci">05 (May)</option>
                <option onChange={handleInputChange} value="06" id="igv08fh">06 (Jun)</option>
                <option onChange={handleInputChange} value="07" id="is2hyi3">07 (Jul)</option>
                <option onChange={handleInputChange} value="08" id="i35pjj1">08 (Aug)</option>
                <option onChange={handleInputChange} value="09" id="i2z5xyq">09 (Sep)</option>
                <option onChange={handleInputChange} value="10" id="ijacc2v">10 (Oct)</option>
                <option onChange={handleInputChange} value="11" id="i8w9ncl">11 (Nov)</option>
                <option onChange={handleInputChange} value="12" id="izxk3nu">12 (Dec)</option>
            </select>
            <select className="py-2.5 px-1 border border-[#979797] rounded w-full" name="yearddl" regex="" id="yearddl" required autoComplete="cc-exp-year" aria-invalid="false" value="2023">
                <option onChange={handleInputChange} value="2023">2023</option>
                <option onChange={handleInputChange} value="2024">2024</option>
                <option onChange={handleInputChange} value="2025">2025</option>
                <option onChange={handleInputChange} value="2026">2026</option>
                <option onChange={handleInputChange} value="2027">2027</option>
                <option onChange={handleInputChange} value="2028">2028</option>
                <option onChange={handleInputChange} value="2029">2029</option>
                <option onChange={handleInputChange} value="2030">2030</option>
                <option onChange={handleInputChange} value="2031">2031</option>
                <option onChange={handleInputChange} value="2032">2032</option>
                <option onChange={handleInputChange} value="2033">2033</option>
                <option onChange={handleInputChange} value="2034">2034</option>
                <option onChange={handleInputChange} value="2035">2035</option>
                <option onChange={handleInputChange} value="2036">2036</option>
                <option onChange={handleInputChange} value="2037">2037</option>
                <option onChange={handleInputChange} value="2038">2038</option>
                <option onChange={handleInputChange} value="2039">2039</option>
                <option onChange={handleInputChange} value="2040">2040</option>
                <option onChange={handleInputChange} value="2041">2041</option>
                <option onChange={handleInputChange} value="2042">2042</option>
            </select>
            </div>
        </div>
        <div className="flex justify-center mt-6">
            <button className="bg-green-600 text-white font-bold text-xl py-4 w-full shadow-[0_2px_0_0_#0f6a28] rounded max-w-[412px] mx-auto">COMPLETE SECURE PURCHASE</button>
        </div>
        <div className="mt-9 mb-5 relative h-[1.2px] bg-blue-500 max-w-[412px] mx-auto">
            <p className="absolute top-0 -mt-2.5 bg-white ml-28 px-2.5 text-sm font-bold">GUARANTEED <span className="text-blue-500">SAFE</span> CHECKOUT</p>
        </div>
        <div className="max-w-[412px] mx-auto">
            <img id="paypalLogo" className="mt-4 mx-auto" src={fourLogo} alt="" />
        </div>
        </div>
    </div>

      </div>


    </div>
  )
}

export default Mainbody