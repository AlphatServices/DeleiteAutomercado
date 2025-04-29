import Link from 'next/link';

import styles from './OrderSuccess.module.css';

interface OrderSuccessProps {
  orderNumber: string;
}

const OrderSuccess = ({ orderNumber }: OrderSuccessProps) => {

  return (
    <div className={styles.contentOrder}>
      <div className={styles.orderLogo}>
        <svg
          width="182"
          height="182"
          viewBox="0 0 182 182"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_457_766)">
            <path
              d="M90.6796 136.41C127.716 136.41 157.74 106.386 157.74 69.35C157.74 32.3138 127.716 2.29004 90.6796 2.29004C53.6434 2.29004 23.6196 32.3138 23.6196 69.35C23.6196 106.386 53.6434 136.41 90.6796 136.41Z"
              fill="#EBEDF0"
            />
            <path
              d="M157.75 179.08C147.66 179.08 139.46 170.88 139.46 160.79H148.6C148.6 165.85 152.68 169.93 157.74 169.93C162.8 169.93 166.88 165.85 166.88 160.79H176.02C176.03 170.88 167.84 179.08 157.75 179.08Z"
              fill="white"
            />
            <path
              d="M54.1098 179.08C44.0198 179.08 35.8198 170.88 35.8198 160.79H44.9598C44.9598 165.85 49.0398 169.93 54.0998 169.93C59.1598 169.93 63.2398 165.85 63.2398 160.79H72.3798C72.3998 170.88 64.1998 179.08 54.1098 179.08Z"
              fill="white"
            />
            <path
              d="M90.6798 121.17H41.9098H8.37979H2.27979V108.98H8.37979H48.0098H78.4898C85.2298 108.97 90.6798 114.43 90.6798 121.17Z"
              fill="white"
            />
            <path
              d="M99.1897 69.6801L93.7297 78.4901C91.8697 82.2701 87.5397 87.3001 87.6297 90.6801C87.6297 90.6801 103.88 91.7501 112.02 93.7301C120.59 95.8301 122.5 98.0301 121.16 105.92C115.06 141.74 114.3 145.55 108.97 145.55C106.68 145.55 102.87 144.03 102.87 136.77C102.87 130.67 105.92 108.97 105.92 108.97C105.92 108.97 83.8197 108.97 78.4897 108.97C73.1597 108.97 60.1997 108.97 60.1997 90.6801C60.1997 72.3901 82.1197 38.8601 96.7797 38.8601C105.92 38.8601 107.26 47.6401 107.26 47.6401L115.07 69.3401C115.07 69.3401 131.65 66.2901 136.41 66.2901C137.36 66.2901 138.3 66.4701 139.21 66.8701C142.75 68.2501 145.55 72.0901 145.55 75.4401C145.55 79.2501 142.99 81.1401 140.3 81.4801C140.03 81.5101 139.72 81.5401 139.45 81.5401C136.49 81.5401 136.8 78.4901 133.35 78.4901C129.91 78.4901 123.84 81.7201 108.96 81.5401C106.5 81.5101 102.48 76.0501 99.1897 69.6801Z"
              fill="white"
            />
            <path
              d="M115.07 26.6699C115.07 26.6699 118.12 34.5299 124.37 38.3999C123.43 38.7099 122.36 38.8599 121.17 38.8599C106.81 38.8599 105.93 26.6699 105.93 26.6699H115.07Z"
              fill="white"
            />
            <path
              d="M118.12 20.58L132.23 17.75C132.23 25.61 131.74 36.13 124.37 38.41C118.12 34.54 115.07 26.68 115.07 26.68L118.12 20.58Z"
              fill="white"
            />
            <path
              d="M8.37988 108.97V96.78V78.49H48.0099V96.78V108.97H8.37988Z"
              fill="#DCB244"
            />
            <path
              d="M139.46 66.3H151.65H154.7H160.8V78.49L152.88 84.59C150.01 78.92 147.24 75.45 145.56 75.45C145.56 72.1 142.76 68.26 139.22 66.88L139.46 66.3Z"
              fill="#DCB244"
            />
            <path
              d="M48.0099 66.3H8.37988V78.49H48.0099V66.3Z"
              fill="#DCB244"
            />
            <path
              d="M179.08 160.79H176.03H166.89H148.6H139.46H130.32L163.85 130.31C173.44 137.5 179.08 148.82 179.08 160.79Z"
              fill="#501C43"
            />
            <path
              d="M163.84 130.31L130.31 160.78H72.3996H63.2596H44.9596H35.8196H23.6196C23.6196 155.54 24.4096 150.42 25.9096 145.55C28.7396 136.1 34.2596 127.56 41.9096 121.16H90.6796V139.45C90.6796 142.8 93.4196 145.55 96.7796 145.55H108.97H124.94C126.46 145.55 127.93 144.97 129.05 143.97C133.68 139.73 145.54 127.94 145.54 118.12C145.54 102.42 142 87.6099 140.29 81.4799C142.98 81.1399 145.54 79.2499 145.54 75.4399C147.22 75.4399 149.99 78.9199 152.86 84.5799C158.17 95.0399 163.84 113 163.84 130.31Z"
              fill="#501C43"
            />
            <path
              d="M133.36 17.53L132.23 17.74L118.12 20.57L115.07 26.67H105.93H102.88C102.88 26.67 99.8296 25.66 99.8296 17.53C99.8296 8.39004 105.93 2.29004 115.07 2.29004C133.36 2.29004 133.36 17.53 133.36 17.53Z"
              fill="#501C43"
            />
            <path
              d="M148.6 160.79H166.89C166.89 165.85 162.81 169.93 157.75 169.93C152.68 169.94 148.6 165.85 148.6 160.79Z"
              fill="#DCB244"
            />
            <path
              d="M44.96 160.79H63.25C63.25 165.85 59.17 169.93 54.11 169.93C49.05 169.94 44.96 165.85 44.96 160.79Z"
              fill="#DCB244"
            />
            <path
              d="M115.07 26.67H105.93H102.88C102.88 26.67 99.8296 25.66 99.8296 17.53C99.8296 8.39004 105.93 2.29004 115.07 2.29004C133.36 2.29004 133.36 17.53 133.36 17.53L132.23 17.74L118.12 20.57L115.07 26.67Z"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M105.93 26.67C105.93 26.67 106.81 38.86 121.17 38.86C122.36 38.86 123.43 38.71 124.37 38.4C131.75 36.11 132.23 25.6 132.23 17.74"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M115.07 26.6699C115.07 26.6699 118.12 34.5299 124.37 38.3999"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M66.2997 11.4299H29.7197"
              stroke="#DCB244"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M48.0096 41.9102H20.5796"
              stroke="#DCB244"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M57.15 26.6699H14.48"
              stroke="#DCB244"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M90.6798 121.17H41.9098H8.37979H2.27979V108.98H8.37979H48.0098H78.4898C85.2298 108.97 90.6798 114.43 90.6798 121.17Z"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M145.55 75.4399C147.23 75.4399 150 78.9199 152.87 84.5799C158.17 95.0299 163.84 112.99 163.84 130.3L130.31 160.78"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M140.31 81.48C142.02 87.61 145.56 102.42 145.56 118.12C145.56 127.94 133.7 139.73 129.07 143.97C127.94 144.98 126.48 145.55 124.96 145.55H108.99H96.7797C93.4297 145.55 90.6797 142.81 90.6797 139.45V121.16"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M148.6 160.79H176.03H179.08C179.08 148.81 173.44 137.5 163.84 130.31"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44.96 160.79H72.4H130.31H139.46H148.6"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41.9096 121.17C34.2596 127.57 28.7396 136.11 25.9096 145.56C24.4196 150.44 23.6196 155.56 23.6196 160.8H35.8096H44.9496"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35.8198 160.79C35.8198 170.88 44.0198 179.08 54.1098 179.08C64.1998 179.08 72.3998 170.88 72.3998 160.79"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M139.46 160.79C139.46 170.88 147.66 179.08 157.75 179.08C167.84 179.08 176.04 170.88 176.04 160.79"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.37988 121.17L25.8799 145.55"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M48.0099 96.78V78.49V66.3H8.37988V78.49V96.78"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.37988 78.49H48.0099"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M93.73 54.1101C94.03 57.5901 95.8 62.6801 98.12 67.5501C98.49 68.2501 98.82 68.9801 99.19 69.6801C102.48 76.0501 106.5 81.5101 108.97 81.5401C123.84 81.7201 129.91 78.4901 133.36 78.4901C136.8 78.4901 136.5 81.5401 139.46 81.5401C139.73 81.5401 140.04 81.5101 140.31 81.4801C143 81.1401 145.56 79.2501 145.56 75.4401C145.56 72.0901 142.76 68.2501 139.22 66.8701C138.31 66.4801 137.36 66.2901 136.42 66.2901C131.66 66.2901 115.08 69.3401 115.08 69.3401L107.27 47.6401C107.27 47.6401 105.93 38.8601 96.79 38.8601C82.13 38.8601 60.21 72.3901 60.21 90.6801C60.21 108.97 73.16 108.97 78.5 108.97C83.83 108.97 105.93 108.97 105.93 108.97C105.93 108.97 102.88 130.67 102.88 136.77C102.88 144.02 106.69 145.55 108.98 145.55C114.31 145.55 115.08 141.74 121.17 105.92C122.51 98.0301 120.59 95.8301 112.03 93.7301C103.89 91.7501 87.64 90.6801 87.64 90.6801C87.55 87.3001 91.88 82.2701 93.74 78.4901"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M152.87 84.59L160.79 78.49V66.3H154.7H151.65"
              stroke="#333"
              strokeWidth="4.5723"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_457_766">
              <rect width="181.37" height="181.37" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={styles.orderSuccessContent}>
        <p><span>Orden exitosa</span></p>
        <h3>¡Gracias por tu pedido!</h3>
        <p className={styles.orderNumber}>El número de pedido es: <strong>#{orderNumber}</strong></p>
        <p>Puedes rastrear tu pedido en la sección "Mis Pedidos".</p>
        <div className={styles.orderSuccessButtons}>
          <Link href="/profile/orders" className={styles.btnTrack}>Rastrear mi pedido</Link>
          <Link href="/" className={styles.btnContinue}>Seguir comprando</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
