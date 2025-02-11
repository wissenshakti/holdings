import { FC } from 'react';
// Ionic Components
import {
  IonPage,
  IonContent,
  IonList,
  IonText,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonListHeader,
  IonLabel,
  IonItem,
  IonToggle,
} from '@ionic/react';

// Custom Components
import SideMenuBar from '../components/SideMenuBar';
import SettingsSummaryStyles from './Settings.module.css';
import rightArrowIcon from '../images/next_arrow.png';
import faceIdIcon from '../images/face_id.png';
import darkModeIcon from '../images/dark_mode.png';
import notificationIcon from '../images/bell_ico.png';
import languageIcon from '../images/language_ico.png';
import documentIcon from '../images/document.png';
import helpIcon from '../images/help.png';

const Portfolio: FC = () => (
  <IonPage className={SettingsSummaryStyles.header_bg}>
    <SideMenuBar contentId="settings" />
    <IonHeader className={SettingsSummaryStyles.header_bg}>
      <div className="w-full p-4 pl-2 pr-2 flex flexx-row items-center justify-between">
        <IonButtons slot="start">
          <IonMenuButton color="light" />
        </IonButtons>
        <IonText color="light">
          <h1 className="font-semibold text-xl">Settings</h1>
        </IonText>
        <div />
      </div>
    </IonHeader>
    <IonContent className={SettingsSummaryStyles.screen_bg} id="settings">
      <IonList className={`m-0 p-0 ${SettingsSummaryStyles.screen_bg}`}>
        <IonListHeader className={SettingsSummaryStyles.settings_list_header}>
          <IonLabel>PREFERENCES</IonLabel>
        </IonListHeader>

        <div className={SettingsSummaryStyles.settings_list_item}>

          <IonLabel className={SettingsSummaryStyles.settings_label}><img src={faceIdIcon} alt="" className="mr-3" /> Face ID</IonLabel>
          <IonToggle slot="end" checked />
        </div>

        <div className={SettingsSummaryStyles.settings_list_item}>
          <IonLabel className={SettingsSummaryStyles.settings_label}><img src={darkModeIcon} alt="" className="mr-3" />Dark theme</IonLabel>
          <IonToggle slot="end" checked />
        </div>
        <div className={SettingsSummaryStyles.settings_list_item}>
          <IonLabel className={SettingsSummaryStyles.settings_label}><img src={notificationIcon} alt="" className="mr-3" />Notifications</IonLabel>
          <IonLabel className={SettingsSummaryStyles.settings_option_list_item}>
            ON <img src={rightArrowIcon} alt="" />
          </IonLabel>
        </div>
        <div className={SettingsSummaryStyles.settings_list_item}>
          <IonLabel className={SettingsSummaryStyles.settings_label}><img src={languageIcon} alt="" className="mr-3" />Language</IonLabel>
          <IonLabel className={SettingsSummaryStyles.settings_option_list_item}>
            English <img src={rightArrowIcon} alt="" />
          </IonLabel>
        </div>
      </IonList>
      {/** Others section */}
      <IonList className={`m-0 p-0 pt-5 ${SettingsSummaryStyles.screen_bg}`}>
        <IonListHeader className={SettingsSummaryStyles.settings_list_header}>
          <IonLabel>OTHERS</IonLabel>
        </IonListHeader>
        <div className={SettingsSummaryStyles.settings_list_item}>
          <IonLabel className={SettingsSummaryStyles.settings_label}><img src={helpIcon} alt="" className="mr-3" />About us</IonLabel>
          <img src={rightArrowIcon} alt="" className={SettingsSummaryStyles.setting_next_arrow_img} />
        </div>
        <div className={SettingsSummaryStyles.settings_list_item}>
          <IonLabel className={SettingsSummaryStyles.settings_label}><img src={documentIcon} alt="" className="mr-3" />Privacy Policy</IonLabel>
          <img src={rightArrowIcon} alt="" className={SettingsSummaryStyles.setting_next_arrow_img} />
        </div>
        <div className={SettingsSummaryStyles.settings_list_item}>
          <IonLabel className={SettingsSummaryStyles.settings_label}><img src={documentIcon} alt="" className="mr-3" />Terms & Conditions</IonLabel>
          <img src={rightArrowIcon} alt="" className={SettingsSummaryStyles.setting_next_arrow_img} />
        </div>
      </IonList>
    </IonContent>
  </IonPage>
);

export default Portfolio;
