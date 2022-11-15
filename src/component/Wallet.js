import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import metamask from '../images/metamask.png';
import walletConnect from '../images/walletconnect.png';
import arrow from '../images/arrow.png';

const Wallet = ({setModal}) => {
    return (
        <div className={`${setModal ? 'fixed top-0 right-0 left-0 bottom-0 w-screen w-screen z-20 bg-[#69686844]' : 'hidden'}`}>
            <div className='w-11/12 lg:w-2/5 ml-auto mr-auto relative mt-44 flex flex-col bg-white py-6 rounded-2xl'>
                <div className='flex justify-between items-center border-b border-solid border-[#CFD8DC] pb-6 px-8'>
                  <h2 className='font-bold text-[#333333] text-2xl'>Connect Wallet</h2>
                  <button type='button' onClick={() => setModal(false)}>
                    <FontAwesomeIcon icon={faTimes} size='2x' className='text-[#1d1d1e]'/>
                  </button>
                </div>
                <div className='pt-8 px-8'>
                  <p className='text-[#333333] mb-4'>Choose your prefered wallet</p>
                <ul className='flex flex-col gap-7'>
                    <li>
                      <button type='button' className='w-full flex justify-between items-center outline-0 rounded-xl border border-solid border-[#d7d7d7] bg-white hover:bg-[#F8F9FA] active:bg-[#F8F9FA] focus:bg-[#F8F9FA] py-3 px-5'>
                        <span className='flex justify-start items-center gap-x-4'>
                          <div className='w-11'>
                            <img src={metamask} alt="metamask" />
                          </div>
                          <p className='text-lg text-blackk font-semibold'>Metamask</p>
                        </span>
                        <span>
                          <img src={arrow} alt="arrow" />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button type='button' className='w-full flex justify-between items-center outline-0 rounded-xl border border-solid border-[#d7d7d7] bg-light hover:bg-[#F8F9FA] active:bg-[#F8F9FA] focus:bg-[#F8F9FA] py-3 px-5'>
                        <span className='flex justify-start items-center gap-x-4'>
                          <div className='w-11'>
                            <img src={walletConnect} alt="wallet connect" />
                          </div>
                          <p className='text-lg text-black font-semibold'>WalletConnect</p>
                        </span>
                        <span>
                          <img src={arrow} alt="arrow" />
                        </span>
                      </button>
                    </li>
                </ul>
                </div>
            </div>
        </div>
);
}

export default Wallet