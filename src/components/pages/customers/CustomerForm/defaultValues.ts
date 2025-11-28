interface Customer {
  fullName: string;
  email: string;
  city: string;
  phone: string;
  socialNetworks?: string[];
}

const defaultCustomer: Customer = {
  fullName: '',
  email: '',
  city: '',
  phone: '',
  socialNetworks: [],
} as const;

export { defaultCustomer, type Customer };
