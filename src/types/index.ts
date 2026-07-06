export interface School {
  id: string;
  name: string;
  motto: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
}

export interface SchoolClass {
  id: string;
  school_id: string;
  name: string;
  class_teacher: string | null;
  academic_year: number;
}

export interface Learner {
  id: string;
  class_id: string;
  admission_no: string;
  full_name: string;
  gender: string;
  date_of_birth: string | null;
}

export interface Subject {
  id: string;
  school_id: string;
  name: string;
  code: string;
}
