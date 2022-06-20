import React from 'react';

import './input.scss';

const input = () => {
  return (
    <div className='search'>
        <svg id={"input"} viewBox="0 0 338 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M14.16 1.50126L0.781799 15.2086V31.5012C0.781799 33.1581 2.12496 34.5013 3.78182 34.5012L326 34.4987L337.008 23.206V4.49868C337.008 2.84182 335.665 1.49867 334.008 1.49868L14.16 1.50126Z" />
        </svg>
        <form>
            <input id={"inputHeader"} placeholder="Busca tu drop aqui"/>     
        </form>
        <svg id="icon-search" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3418 15.9413L13.6718 11.2713C14.6026 9.81776 14.9635 8.07163 14.6854 6.36821C14.4072 4.66479 13.5095 3.1242 12.1647 2.04229C10.8199 0.960382 9.12284 0.41345 7.39938 0.506532C5.67591 0.599614 4.04759 1.32615 2.82714 2.5466C1.60669 3.76705 0.880154 5.39537 0.787072 7.11884C0.693991 8.8423 1.24092 10.5394 2.32283 11.8842C3.40474 13.229 4.94533 14.1267 6.64875 14.4048C8.35217 14.683 10.0983 14.322 11.5518 13.3913L16.2218 18.0613C16.5031 18.3422 16.8843 18.4999 17.2818 18.4999C17.6793 18.4999 18.0605 18.3422 18.3418 18.0613C18.4821 17.9227 18.5935 17.7576 18.6695 17.5757C18.7455 17.3937 18.7847 17.1985 18.7847 17.0013C18.7847 16.8041 18.7455 16.6088 18.6695 16.4269C18.5935 16.2449 18.4821 16.0798 18.3418 15.9413ZM2.7818 7.50126C2.7818 6.51235 3.07504 5.54565 3.62445 4.72341C4.17386 3.90116 4.95475 3.2603 5.86838 2.88186C6.78201 2.50342 7.78735 2.40441 8.75725 2.59733C9.72716 2.79026 10.6181 3.26646 11.3173 3.96573C12.0166 4.66499 12.4928 5.5559 12.6857 6.52581C12.8787 7.49571 12.7796 8.50105 12.4012 9.41468C12.0228 10.3283 11.3819 11.1092 10.5597 11.6586C9.73741 12.208 8.77071 12.5013 7.7818 12.5013C6.45572 12.5013 5.18395 11.9745 4.24627 11.0368C3.30858 10.0991 2.7818 8.82734 2.7818 7.50126Z" />
        </svg>
    </div>
  )
}

export default input