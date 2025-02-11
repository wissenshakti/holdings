import { FC } from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonMenu,
} from '@ionic/react';
import { useHistory } from 'react-router';
import styles from './SideMenuBar.module.css';
import homeIcon from '../images/home.png';
import documentIcon from '../images/document.png';
import transactionsIcon from '../images/transactions.png';
import profileIcon from '../images/profile.png';
import settingsIcon from '../images/settings.png';
import helpIcon from '../images/help.png';
import logoutIcon from '../images/logout.png';
import profileImage from '../images/profile-image.jpg';
import rightArrowIcon from '../images/right-arrow-blue.png';

type SideMenuProps = {
  contentId: string;
};

const SideMenuBar: FC<SideMenuProps> = ({ contentId }) => {
  const history = useHistory();
  const backToSummary = () => {
    history.push('/accountsummary');
  }
  const navigateToSettings =() =>{
    history.push('/settings');
  };

  const goToTransactions = () => {
    history.push('/transactions');
  };

  const goToPortfolioSummary = () => {
    history.push('/portfoliosummary');
  };

  return (
    <IonMenu
      side="start"
      type="overlay"
      contentId={contentId}
      class={styles['side-menu']}
    >
      <IonContent class={styles['menu-content']}>
        <IonGrid class="p-0">
          <IonRow class={styles['profile-row']}>
            <IonCol size="3" class={styles['profile-image-col']}>
              <img src={profileImage} alt="" />
            </IonCol>
            <IonCol size="7" class={styles['profile-info-col']}>
              <span>John Smith</span>
              <span className={styles['email-and-id']}>
                john.smith@gmail.com
              </span>
              <span className={styles['email-and-id']}>MS12345</span>
            </IonCol>
            <IonCol
              size="2"
              class={styles['arrow-btn-col']}
              onClick={() => backToSummary()}
            >
              <div>
                <img src={rightArrowIcon} alt="" />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList class={styles['menu-list']}>
          <IonItem
            class={styles['menu-list-item']}
            onClick={() => goToPortfolioSummary()}
          >
            <img src={homeIcon} alt="" />
            <span>Dashboard</span>
          </IonItem>
          <IonItem class={styles['menu-list-item']}>
            <img src={documentIcon} alt="" />
            <span>Documents &#38; Reports</span>
          </IonItem>
          <IonItem
            class={styles['menu-list-item']}
            onClick={() => goToTransactions()}
          >
            <img src={transactionsIcon} alt="" />
            <span>Transactions</span>
            <span className={styles['transaction-num']}>12</span>
          </IonItem>
          <IonItem class={styles['menu-list-item']}>
            <img src={profileIcon} alt="" />
            <span>Profile</span>
          </IonItem>
          <IonItem class={styles['menu-list-item']} onClick={navigateToSettings}>
            <img src={settingsIcon} alt="" />
            <span>Settings</span>
          </IonItem>
          <IonItem class={styles['menu-list-item']}>
            <img src={helpIcon} alt="" />
            <span>Help</span>
          </IonItem>
          <IonItem class={styles['menu-list-item']}>
            <img src={logoutIcon} alt="" />
            <span>Logout</span>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export default SideMenuBar;
