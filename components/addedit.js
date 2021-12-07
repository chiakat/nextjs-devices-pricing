import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import userService from '../services/user.service';
import alertService from '../services/alert.service';

import styles from '../styles/home.module.css';

export default function AddEdit(props) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [user, setUser] = useState('');
  const [project, setProject] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  // const user = props?.user;
  const isAddMode = !user;
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Device Name is required'),
    location: Yup.string()
      .required('Location is required'),
    user: Yup.number()
      .required('User ID is required'),
    project: Yup.number(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // set default form values if in edit mode
  if (!isAddMode) {
    formOptions.defaultValues = props.device;
  }

  // get functions to build form with useForm() hook
  const {
    register, handleSubmit, reset, formState,
  } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    return isAddMode
      ? createDevice(data)
      : updateDevice(device.id, data);
  }
  function createDevice(data) {
    return userService.register(data)
      .then(() => {
        alertService.success('Device added', { keepAfterRouteChange: true });
        router.push('.');
      })
      .catch(alertService.error);
  }

  function updateDevice(id, data) {
    return userService.update(id, data)
      .then(() => {
        alertService.success('Device updated', { keepAfterRouteChange: true });
        router.push('..');
      })
      .catch(alertService.error);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
            <div className="form-group col">
                <label>First Name</label>
                <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.firstName?.message}</div>
            </div>
            <div className="form-group col">
                <label>Last Name</label>
                <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col">
                <label>Username</label>
                <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group col">
                <label>
                    Password
                    {!isAddMode && <em className="ml-1">(Leave blank to keep the same password)</em>}
                </label>
                <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
        </div>
        <div className="form-group">
            <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Save
            </button>
            <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
            <Link href="/users" className="btn btn-link">Cancel</Link>
        </div>
    </form>
);
}
  // const handleDevice = async (e) => {
  //   e.preventDefault();

  //   // reset error and message
  //   setError('');
  //   setMessage('');

  //   // fields check
  //   if (!name || !location) return setError('All fields are required');

  //   const response = await fetch('/api/devices', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name, location, user, project,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };

//   return (
//     <>
//       <div className={styles.container}>
//         <form onSubmit={handleDevice} className={styles.form}>
//           {error ? (
//             <div className={styles.formItem}>
//               <h3 className={styles.error}>{error}</h3>
//             </div>
//           ) : null}
//           {message ? (
//             <div className={styles.formItem}>
//               <h3 className={styles.message}>{message}</h3>
//             </div>
//           ) : null}
//           <div className={styles.formItem}>
//             <label>Device Name</label>
//             <input
//               type="text"
//               name="device name"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               placeholder="Device Name"
//             />
//           </div>
//           <div className={styles.formItem}>
//             <label>Location</label>
//             <input
//               type="text"
//               name="location"
//               onChange={(e) => setLocation(e.target.value)}
//               value={location}
//               placeholder="Location"
//             />
//           </div>
//           <div className={styles.formItem}>
//             <label>Project</label>
//             <input
//               type="number"
//               name="project"
//               onChange={(e) => setProject(e.target.value)}
//               value={project}
//               placeholder="Project"
//             />
//           </div>
//           <div className={styles.formItem}>
//             <label>User</label>
//             <input
//               type="number"
//               name="user"
//               onChange={(e) => setUser(e.target.value)}
//               value={user}
//               placeholder="user"
//             />
//           </div>
//           <div className={styles.formItem}>
//             <button type="submit">Add Device</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
