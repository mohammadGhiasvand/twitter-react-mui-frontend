import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { monthsArray } from "../../constants/months";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/Auth/Action";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email address is required"),
  password: Yup.string().required("Password is required").min(8, "Too short"),
});

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 87 }, (_, i) => currentYear - i - 13);
const months = [...monthsArray];
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const SignupForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      dateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
    },
    validationSchema,
    onSubmit: (values) => {
      const { year, month, day } = values.dateOfBirth;

      const dateOfBirth = `${year}-${month}-${day}`;
      values.dateOfBirth = dateOfBirth;

      dispatch(registerUser(values));

      console.log("form value ", values);
    },
  });

  const handleDateChange = (name) => (event) => {
    formik.setFieldValue("dateOfBirth", {
      ...formik.values.dateOfBirth,
      [name]: event.target.value,
    });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            variant="outlined"
            size="medium"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            size="medium"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            size="medium"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel
            // id="day"
            sx={{
              pb: ".3rem",
            }}
          >
            Day
          </InputLabel>
          <Select
            fullWidth
            name="day"
            // labelId="day"
            onChange={handleDateChange("day")}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth.day}
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel
            id="month"
            sx={{
              pb: ".3rem",
            }}
          >
            Month
          </InputLabel>
          <Select
            fullWidth
            name="month"
            labelId="month"
            onChange={handleDateChange("month")}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth.month}
          >
            {months.map((month) => (
              <MenuItem key={month.value} value={month.value}>
                {month.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel
            id="year"
            sx={{
              pb: ".3rem",
            }}
          >
            Year
          </InputLabel>
          <Select
            fullWidth
            name="year"
            labelId="year"
            onChange={handleDateChange("year")}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth.year}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid className="mt-20" item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              borderRadius: "29px",
              py: "15px",
              backgroundColor: "#1DA1F2",
              textTransform: "none",
            }}
          >
            Sign in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupForm;
