import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../Components/Button';

export default function MyRequests() {
  const [pressedButton, setPressedButton] = useState(null);

  const headerButtons = [
    {
      id: 1,
      title: 'Bank Evaluation',
      onPress: () => {},
    },
    {
      id: 2,
      title: 'Insurance',
      onPress: () => {},
    },
    {
      id: 3,
      title: 'Financing',
      onPress: () => {},
    },
  ];

  const chipButtons = [
    {
      id: 1,
      title: 'All',
      onPress: () => {},
    },
    {
      id: 2,
      title: 'Drafts',
      onPress: () => {},
    },
    {
      id: 3,
      title: 'Awaiting Payments',
      onPress: () => {},
    },
    {
      id: 4,
      title: 'Paid',
      onPress: () => {},
    },
    {
      id: 5,
      title: 'Overdue',
      onPress: () => {},
    },
    {
      id: 6,
      title: 'Cancelled',
      onPress: () => {},
    },
    {
      id: 7,
      title: 'Processing',
      onPress: () => {},
    },
    {
      id: 8,
      title: 'Shipped',
      onPress: () => {},
    },
    {
      id: 9,
      title: 'Completed',
      onPress: () => {},
    },
    {
      id: 10,
      title: 'Archived',
      onPress: () => {},
    },
  ];

  const cardData = [
    {
      ref: 1,
      type: 'Bank Evaluation',
      status: 'Confirmed',
      disposition: 'Scheduled',
      name: 'Neha Imran',
      car: 'Suzuki Alto - VXL 2022',
      date: 'May 30, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 2,
      type: 'Insurance',
      status: 'Pending',
      disposition: 'Awaiting Confirmation',
      name: 'Ali Raza',
      car: 'Toyota Corolla - GLi 2018',
      date: 'June 2, 2025',
      paymentStatus: 'Unpaid',
    },
    {
      ref: 3,
      type: 'Bank Evaluation',
      status: 'Confirmed',
      disposition: 'Completed',
      name: 'Ayesha Khan',
      car: 'Honda Civic - Oriel 2020',
      date: 'May 28, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 4,
      type: 'Insurance',
      status: 'Cancelled',
      disposition: 'N/A',
      name: 'Usman Tariq',
      car: 'Kia Sportage - AWD 2021',
      date: 'May 29, 2025',
      paymentStatus: 'Refunded',
    },
    {
      ref: 5,
      type: 'Bank Evaluation',
      status: 'Pending',
      disposition: 'Scheduled',
      name: 'Fatima Noor',
      car: 'Hyundai Elantra - GLS 2023',
      date: 'May 31, 2025',
      paymentStatus: 'Unpaid',
    },
    {
      ref: 6,
      type: 'Insurance',
      status: 'Confirmed',
      disposition: 'Scheduled',
      name: 'Zain Malik',
      car: 'Changan Alsvin - Lumiere 2022',
      date: 'June 1, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 7,
      type: 'Financing',
      status: 'Processing',
      disposition: 'Under Review',
      name: 'Hira Naveed',
      car: 'MG HS - Trophy 2023',
      date: 'June 3, 2025',
      paymentStatus: 'Pending',
    },
    {
      ref: 8,
      type: 'Financing',
      status: 'Approved',
      disposition: 'Documents Signed',
      name: 'Sami Ullah',
      car: 'Suzuki Cultus - VXR 2021',
      date: 'May 27, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 9,
      type: 'Financing',
      status: 'Rejected',
      disposition: 'Credit Issue',
      name: 'Mehwish Ali',
      car: 'Honda City - Aspire 2019',
      date: 'May 26, 2025',
      paymentStatus: 'N/A',
    },
    {
      ref: 10,
      type: 'Bank Evaluation',
      status: 'Pending',
      disposition: 'Scheduled',
      name: 'Danish Javed',
      car: 'Toyota Yaris - ATIV 2020',
      date: 'June 4, 2025',
      paymentStatus: 'Unpaid',
    },
    {
      ref: 11,
      type: 'Insurance',
      status: 'Confirmed',
      disposition: 'Completed',
      name: 'Amna Sheikh',
      car: 'Hyundai Tucson - FWD 2021',
      date: 'June 5, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 12,
      type: 'Financing',
      status: 'Processing',
      disposition: 'Awaiting Documents',
      name: 'Tariq Mehmood',
      car: 'Proton Saga - Ace 2022',
      date: 'June 6, 2025',
      paymentStatus: 'Pending',
    },
    {
      ref: 13,
      type: 'Bank Evaluation',
      status: 'Confirmed',
      disposition: 'Scheduled',
      name: 'Kiran Zafar',
      car: 'Nissan Dayz - 2017',
      date: 'June 7, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 14,
      type: 'Insurance',
      status: 'Cancelled',
      disposition: 'Client Request',
      name: 'Fahad Anwar',
      car: 'Honda BR-V - 2019',
      date: 'June 8, 2025',
      paymentStatus: 'Refunded',
    },
    {
      ref: 15,
      type: 'Financing',
      status: 'Approved',
      disposition: 'Disbursed',
      name: 'Nimra Hussain',
      car: 'Suzuki Wagon R - VXL 2021',
      date: 'June 9, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 16,
      type: 'Bank Evaluation',
      status: 'Pending',
      disposition: 'Awaiting Scheduling',
      name: 'Jawad Saleem',
      car: 'Kia Picanto - 2022',
      date: 'June 10, 2025',
      paymentStatus: 'Unpaid',
    },
    {
      ref: 17,
      type: 'Insurance',
      status: 'Confirmed',
      disposition: 'Scheduled',
      name: 'Sadia Malik',
      car: 'Toyota Fortuner - 2020',
      date: 'June 11, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 18,
      type: 'Financing',
      status: 'Rejected',
      disposition: 'Low Score',
      name: 'Bilal Ahmad',
      car: 'Honda Fit - 2015',
      date: 'June 12, 2025',
      paymentStatus: 'N/A',
    },
    {
      ref: 19,
      type: 'Bank Evaluation',
      status: 'Confirmed',
      disposition: 'Scheduled',
      name: 'Zoya Aamir',
      car: 'Suzuki Swift - GLX CVT 2022',
      date: 'June 13, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 20,
      type: 'Insurance',
      status: 'Pending',
      disposition: 'Processing',
      name: 'Umer Farooq',
      car: 'Changan Karvaan - 2021',
      date: 'June 14, 2025',
      paymentStatus: 'Unpaid',
    },
    {
      ref: 21,
      type: 'Financing',
      status: 'Processing',
      disposition: 'Awaiting Approval',
      name: 'Sana Iqbal',
      car: 'Toyota Aqua - 2016',
      date: 'June 15, 2025',
      paymentStatus: 'Pending',
    },
    {
      ref: 22,
      type: 'Bank Evaluation',
      status: 'Confirmed',
      disposition: 'Completed',
      name: 'Raza Shah',
      car: 'Honda Accord - 2018',
      date: 'June 16, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 23,
      type: 'Insurance',
      status: 'Confirmed',
      disposition: 'Scheduled',
      name: 'Iqra Yousaf',
      car: 'Kia Stonic - EX+ 2023',
      date: 'June 17, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 24,
      type: 'Financing',
      status: 'Rejected',
      disposition: 'Incomplete Docs',
      name: 'Zubair Khan',
      car: 'Suzuki Mehran - VX 2016',
      date: 'June 18, 2025',
      paymentStatus: 'N/A',
    },
    {
      ref: 25,
      type: 'Bank Evaluation',
      status: 'Pending',
      disposition: 'Scheduled',
      name: 'Mehreen Shahid',
      car: 'Daihatsu Mira - 2019',
      date: 'June 19, 2025',
      paymentStatus: 'Unpaid',
    },
    {
      ref: 26,
      type: 'Insurance',
      status: 'Cancelled',
      disposition: 'N/A',
      name: 'Arsalan Qureshi',
      car: 'Hyundai Sonata - 2022',
      date: 'June 20, 2025',
      paymentStatus: 'Refunded',
    },
    {
      ref: 27,
      type: 'Financing',
      status: 'Approved',
      disposition: 'Ready for Pickup',
      name: 'Huma Abbasi',
      car: 'Honda Vezel - Hybrid 2020',
      date: 'June 21, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 28,
      type: 'Bank Evaluation',
      status: 'Confirmed',
      disposition: 'Scheduled',
      name: 'Salman Jamil',
      car: 'Toyota Prius - 2017',
      date: 'June 22, 2025',
      paymentStatus: 'Paid',
    },
    {
      ref: 29,
      type: 'Insurance',
      status: 'Pending',
      disposition: 'Awaiting Confirmation',
      name: 'Rubina Farooq',
      car: 'Suzuki Bolan - 2020',
      date: 'June 23, 2025',
      paymentStatus: 'Unpaid',
    },
    {
      ref: 30,
      type: 'Financing',
      status: 'Processing',
      disposition: 'Under Review',
      name: 'Kashif Naveed',
      car: 'Mitsubishi EK Wagon - 2015',
      date: 'June 24, 2025',
      paymentStatus: 'Pending',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed Header */}
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Requests</Text>
          <View style={styles.buttonContainer}>
            {headerButtons.map(button => {
              return (
                <Button
                  styles={
                    button?.id === pressedButton
                      ? styles?.highlightedButton
                      : styles.button
                  }
                  buttonText={button.title}
                  textStyles={
                    button?.id === pressedButton
                      ? styles?.highlightedButtonText
                      : styles.buttonText
                  }
                  onPress={() => {
                    button.onPress();
                    setPressedButton(button?.id);
                  }}
                />
              );
            })}
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.chipButtonContainer}>
            {chipButtons.map(button => {
              return (
                <Button
                  styles={styles.chipButtons}
                  onPress={() => {
                    button.onPress();
                  }}
                  buttonText={button.title}
                  textStyles={styles.buttonText}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {backgroundColor: '#e8e6e1', flexDirection: 'column', gap: 4},
        ]}>
        {cardData.map(data => {
          return (
            <View style={styles.card}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[styles.subtext, {paddingBottom: 5}]}>
                  {`Ref: ${data.ref} - ${data.type}`}{' '}
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: '#FFF4E1',
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    fontSize: 12,
                    color: '#cb8327',
                    borderRadius: 2,
                    fontWeight: 500
                  }}>{`${data.disposition} • ${data.status}`}</Text>
              </View>

              <Text style={styles.title}>{data.name}</Text>
              <Text style={{fontSize: 12, color: '#7a7a7a', fontWeight: 500}}>
                {data.car}
              </Text>
              <Text
                style={
                  styles.subtext
                }>{`${data.date} • ${data.paymentStatus}`}</Text>

              <View style={styles.separator}></View>
              <View style={{flexDirection: 'row', gap: 7}}>
                <Button
                  styles={{
                    flex: 1,
                    width: '50%',
                    backgroundColor: '#e9f8ed',
                    padding: 10,
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                  onPress={() => {}}
                  buttonText={'Whatsapp'}
                  textStyles={{
                    color: '#009f2a',
                    fontSize: 13,
                    fontWeight: '600',
                    marginRight: 6,
                  }}
                />

                <Button
                  styles={{
                    flex: 1,
                    width: '50%',
                    backgroundColor: '#fef2f2',
                    padding: 10,
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {}}
                  buttonText="Call"
                  textStyles={{
                    color: '#e42322',
                    fontSize: 13,
                    fontWeight: '600',
                  }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 90,
    paddingHorizontal: 16,
    boxShadow: '0 5px 6px -5px rgba(0, 0, 0, 0.2)',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  scrollContent: {
    padding: 2,
    flexDirection: 'column',
    gap: 2,
  },
  /////////////////////////////////////////

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#757575',
  },
  highlightedButton: {
    backgroundColor: '#FDECEA',
    borderColor: '#F8BBD0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
  },
  highlightedButtonText: {
    color: '#D32F2F',
    fontWeight: '600',
  },
  chipButtons: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  chipButtonContainer: {
    padding: 6,
    flexDirection: 'row',
    gap: 6,
  },
  /////////////////////////////////////////

  card: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 16,
    borderColor: '#9E9E9E',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#333',
  },
  /////////////////////////////////////
  subtext: {
    fontSize: 11,
    color: '#9E9E9E',
  },
  separator: {
    height: 1,
    backgroundColor: '#f1f1f1',
    marginVertical: 10,
  },
});
