export const authFieldsErrors = {
	email: [
		{ type: 'required', message: 'Enter email address' },
		{ type: 'pattern', message: 'Please enter a valid email address' }
	],
	password: [
		{ type: 'required', message: 'Enter password' },
		{ type: 'minlength', message: 'Password cannot be less than 6 characters' }
	],
	confirmPassword: [
		{ type: 'misMatch', message: 'Password & confirm password didn\'t match' }
	],
	otp: [
		{ type: 'required', message: 'Enter OTP' },
		{ type: 'pattern', message: 'Please enter a valid OTP' }
	],
	shopCode: [
		{ type: 'required', message: 'Enter shop code' },
	],
	firstName: [
		{ type: 'required', message: 'Enter first name' },
		{ type: 'pattern', message: 'Please enter first name in alphabets' },
		{ type: 'minlength', message: 'Please enter your first name' },
	],
	lastName: [
		{ type: 'required', message: 'Enter last name' },
		{ type: 'pattern', message: 'Please enter last name in alphabets' },
		{ type: 'minlength', message: 'Please enter your last name' },
	],
	mobileNumber: [
		{ type: 'required', message: 'Enter mobile number' },
		{ type: 'pattern', message: 'Please enter 10 digit valid Phone number' },
		{ type: 'maxlength', message: 'Enter 10 digit number' }
	],
	mobileCode: [
		{ type: 'required', message: 'Enter mobile code' }
	],
	location: [
		{ type: 'required', message: 'Enter address' }
	],
	city: [
		{ type: 'required', message: 'Enter city' }
	],
	state: [
		{ type: 'required', message: 'Enter state' }
	],
	countryName: [
		{ type: 'required', message: 'Enter country' }
	],
	pincode: [
		{ type: 'required', message: 'Enter pincode' },
		{ type: 'minlength', message: 'Please enter a valid pincode' },
		{ type: 'pattern', message: 'Enter pincode in number' },
	],
};

export const profileFromErrors = {
	email: [
		{ type: 'required', message: 'Enter email address' },
		{ type: 'pattern', message: 'Please enter a valid email address' }
	],
	firstName: [
		{ type: 'required', message: 'Enter first name' }
	],
	lastName: [
		{ type: 'required', message: 'Enter last name' }
	],
	mobileNumber: [
		{ type: 'required', message: 'Enter mobile number' },
		{ type: 'maxlength', message: 'Please enter a valid mobile number' }
	],
	officePhoneNumber: [
		{ type: 'required', message: 'Enter Office mobile number' }
	],
	mobileCode: [
		{ type: 'required', message: 'Enter mobile code' }
	],
	officePhoneCountryCode: [
		{ type: 'required', message: 'Enter Office mobile' }
	],
	location: [
		{ type: 'required', message: 'Enter address' }
	],
	locationPoint: [
		{ type: 'required', message: 'Enter location' }
	],
	city: [
		{ type: 'required', message: 'Enter city' }
	],
	state: [
		{ type: 'required', message: 'Enter state' }
	],
	countryName: [
		{ type: 'required', message: 'Enter country' }
	],
	pincode: [
		{ type: 'required', message: 'Enter pincode' },
		{ type: 'minlength', message: 'Please enter a valid pincode' },
		{ type: 'pattern', message: 'Enter pincode in number' },
	],
};


export const itemFormErrors = {
	name: [
		{ type: 'required', message: "Select product" }
	],
	units: [
		{ type: 'required', message: "Enter Units" }
	],
	unitType: [
		{ type: 'required', message: "Select Unit Type" }
	],
	quantity: [
		{ type: 'required', message: "Enter Quantity" }
	]
};
export const ratingFormErrors = {
	quality: [
		{ type: 'required', message: "Rate for quality" }
	],
	deliveryTime: [
		{ type: 'required', message: "Rate for delivery time" }
	],
};
export const reportFormErrors = {
	reason: [
		{ type: 'required', message: "please enter reason" }
	],
};

export const supportFormErrors = {
	firstName: [
		{ type: 'required', message: "Enter first name" }
	],
	lastName: [
		{ type: 'required', message: "Enter last name" }
	],
	description: [
		{ type: 'required', message: "please enter note here" }
	],
};
export const feedBackFormErrors = {
	description: [
		{ type: 'required', message: "Enter description" },
		{ type: 'maxlength', message: 'Description cannot be more that 100 characters' },
	]
};

export const bookingRequestError = {
	description: [
		{ type: 'required', message: "Enter description" },
		{ type: 'maxlength', message: 'Description cannot be more that 100 characters' },
	],
	image: [
		{ type: 'required', message: "Please upload image" },
	],
	address: [
		{ type: 'required', message: "Select address" }
	],
	paymentMode: [
		{ type: 'required', message: "Select payment mode" }
	],
};

export const tradeFormErrors = {
	title: [
		{ type: 'required', message: 'Enter title' },
	],
	type: [
		{ type: 'required', message: "Enter type of trade" }
	],
	description: [
		{ type: 'required', message: "Enter description" },
		{ type: 'maxlength', message: 'Description cannot be more that 100 characters' },
	],
	productId: [
		{ type: 'required', message: 'Select product' }
	],
	units: [
		{ type: 'required', message: "Enter units" }
	],
	unitType: [
		{ type: 'required', message: "Enter unit type" }
	],
	price: [
		{ type: 'required', message: 'Enter price' },
	],
	location: [
		{ type: 'required', message: 'Enter address' }
	],
	city: [
		{ type: 'required', message: 'Enter city' }
	],
	state: [
		{ type: 'required', message: 'Enter state' }
	],
	countryName: [
		{ type: 'required', message: 'Enter country' }
	],
	countryCode: [
		{ type: 'required', message: 'Enter countryCode' }
	],
	pincode: [
		{ type: 'required', message: 'Enter pincode' },
		{ type: 'minlength', message: 'Please enter a valid pincode' },
		{ type: 'pattern', message: 'Enter pincode in number' },
	],
	auctionMedia: [
		{ type: 'required', message: 'Please add media' },
		{ type: 'minlength', message: 'Please add at least 1 media' },
	],
};
export const bidFormErrors = {
	price: [
		{ type: 'required', message: "Enter price" }
	],
};
export const productRequestErrors = {
	name: [
		{ type: 'required', message: "Enter product name" }
	],
	brandName: [
		{ type: 'required', message: "Enter brand name" }
	],
	description: [
		{ type: 'required', message: "Enter description" },
		{ type: 'maxlength', message: 'Description cannot be more that 100 characters' },
	]
};

export const addressErrors = {
	location: [
		{ type: 'required', message: 'Enter address' }
	],
	city: [
		{ type: 'required', message: 'Enter city' }
	],
	state: [
		{ type: 'required', message: 'Enter state' }
	],
	countryName: [
		{ type: 'required', message: 'Enter country' }
	],
	countryCode: [
		{ type: 'required', message: 'Enter countryCode' }
	],
	pincode: [
		{ type: 'required', message: 'Enter pincode' },
		{ type: 'minlength', message: 'Please enter a valid pincode' },
		{ type: 'pattern', message: 'Enter pincode in number' },
	],
	// type:[
	// 	{type: 'required', message:"Enter Type"}
	// ],
	addressLine1: [
		{
			type: 'required', message: "Enter Address Line1"
		}
	]
};
export const checkoutFormWErrors = {
	address: [
		{ type: 'required', message: "Select address" }
	],
	paymentMode: [
		{ type: 'required', message: "Select payment mode" }
	],
}

export const setShpFormError = {
	shopCode: [
		{ type: 'required', message: "Enter shop code" }
	],
}

export const updateMobileNumberFormErrors = {
	otp: [{
		type: 'required', message: "Enter OTP "
	}],
	mobileNumber: [{
		type: 'required', message: "Enter Mobile Number"
	}]
}
export const updateEmailFormErrors = {
	otp: [{
		type: 'required', message: "Enter OTP "
	}],
	email: [{
		type: 'required', message: "Enter email address"
	}]
}