import TextAreaInput from '../../Forms/Elements/Inputs/TextAreaInput';
import TextInput from '../../Forms/Elements/Inputs/TextInput';
import { motion } from 'framer-motion';

export function ProfileForm({ user_details, handleForm }: any) {

  return (
    <motion.form
      key="profileForm"
      initial={{ opacity:0, height: '200px' }}
      animate={{ opacity:1, height: 'auto' }}
      transition={{ type: 'tween' }}
      exit={{ opacity:0, height: '200px' }}
      className="pr-8">
      <div className="flex gap-1">
        <TextInput
          type="text"
          name="first_name"
          value={user_details.first_name ? user_details.first_name : ''}
          placeholder="First Name"
          label="First Name"
          callback={handleForm}
        />
        <TextInput
          type="text"
          name="last_name"
          value={user_details.last_name ? user_details.last_name : ''}
          placeholder="Last Name"
          label="Last Name"
          callback={handleForm}
        />
      </div>
      <TextInput
        type="text"
        name="phone_number"
        value={user_details.phone_number ? user_details.phone_number : ''}
        placeholder="Phone Number"
        label="Phone Number"
        callback={handleForm}
      />
      <TextInput
        type="text"
        name="email"
        value={user_details.email ? user_details.email : ''}
        placeholder="Email"
        label="Email"
        callback={handleForm}
      />
      <div className="flex gap-1">
        <TextInput
          type="text"
          name="street"
          value={user_details.street ? user_details.street : ''}
          placeholder="Street"
          label="Street"
          callback={handleForm}
        />
        <TextInput
          type="text"
          name="postcode"
          value={user_details.postcode ? user_details.postcode : ''}
          placeholder="PostCode"
          label="PostCode"
          callback={handleForm}
        />
      </div>
      <div className="flex gap-1">
        <TextInput
          type="text"
          name="city"
          value={user_details.city ? user_details.city : ''}
          placeholder="City"
          label="City"
          callback={handleForm}
        />
        <TextInput
          type="text"
          name="country"
          value={user_details.country ? user_details.country : ''}
          placeholder="Country"
          label="Country"
          callback={handleForm}
        />
      </div>
      <TextAreaInput
        type="text"
        name="headline"
        value={user_details.headline ? user_details.headline : ''}
        placeholder="Headline"
        label="Headline"
        callback={handleForm}
      />
    </motion.form>
  );
}

