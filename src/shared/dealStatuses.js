const dealStatuses = {
  new: 'DealStatusNew',
  awaitingAcceptance: 'DealStatusAwaitingAcceptance',
  accepted: 'DealStatusAccepted',
  paymentChannelReady: 'DealStatusPaymentChannelReady',
  fundsNeeded: 'DealStatusFundsNeeded',
  ongoing: 'DealStatusOngoing',
  paymentSent: 'DealStatusPaymentSent',
  fundsNeededLastPayment: 'DealStatusFundsNeededLastPayment',
  lastPaymentSent: 'DealStatusLastPaymentSent',
  finalizing: 'DealStatusFinalizing',
  completed: 'DealStatusCompleted',
};

export default dealStatuses;
