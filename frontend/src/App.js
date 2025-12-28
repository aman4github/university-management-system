import { Routes, Route } from 'react-router-dom';
import './index.css';
import { homeNav, loginNav } from './navElements';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login/Login';
import AdminPanel from './components/admin/AdminPanel';
import FacultyPanel from './components/faculty/FacultyPanel';
import StudentPanel from './components/student/StudentPanel';
import RegistrationForm from './components/RegistrationForm'

import SemesterPanelAdmin from './components/admin/Promotion_Student/SemesterPanel';

import StudentVerifiactionBCA from './components/admin/Verification_Rejection/BCA/StudentVerifiactionBCA';
import StudentVerifiactionBBA from './components/admin/Verification_Rejection/BBA/StudentVerifiactionBBA';
import StudentVerifiactionBHM from './components/admin/Verification_Rejection/BHM/StudentVerifiactionBHM';
import ConfirmationVerifyStudentBCA from './components/admin/Verification_Rejection/BCA/ConfirmationVerifyStudentBCA';
import ConfirmationVerifyStudentBBA from './components/admin/Verification_Rejection/BBA/ConfirmationVerifyStudentBBA';
import ConfirmationVerifyStudentBHM from './components/admin/Verification_Rejection/BHM/ConfirmationVerifyStudentBHM';
import RejectionVerifyStudentBCA from './components/admin/Verification_Rejection/BCA/RejectionVerifyStudentBCA';
import RejectionVerifyStudentBBA from './components/admin/Verification_Rejection/BBA/RejectionVerifyStudentBBA';
import RejectionVerifyStudentBHM from './components/admin/Verification_Rejection/BHM/RejectionVerifyStudentBHM';

import SemesterPanel from './components/faculty/ViewStudent/SemesterPanel';
import AllStudentsViewBCA1st from './components/faculty/ViewStudent/Sem1st/AllStudentsViewBCA1st';
import AllStudentsViewBBA1st from './components/faculty/ViewStudent/Sem1st/AllStudentsViewBBA1st';
import AllStudentsViewBHM1st from './components/faculty/ViewStudent/Sem1st/AllStudentsViewBHM1st';

import AllStudentsViewBCA2nd from './components/faculty/ViewStudent/Sem2nd/AllStudentsViewBCA2nd';
import AllStudentsViewBBA2nd from './components/faculty/ViewStudent/Sem2nd/AllStudentsViewBBA2nd';
import AllStudentsViewBHM2nd from './components/faculty/ViewStudent/Sem2nd/AllStudentsViewBHM2nd';

import AllStudentsViewBCA3rd from './components/faculty/ViewStudent/Sem3rd/AllStudentsViewBCA3rd';
import AllStudentsViewBBA3rd from './components/faculty/ViewStudent/Sem3rd/AllStudentsViewBBA3rd';
import AllStudentsViewBHM3rd from './components/faculty/ViewStudent/Sem3rd/AllStudentsViewBHM3rd';

import AllStudentsViewBCA4th from './components/faculty/ViewStudent/Sem4th/AllStudentsViewBCA4th';
import AllStudentsViewBBA4th from './components/faculty/ViewStudent/Sem4th/AllStudentsViewBBA4th';
import AllStudentsViewBHM4th from './components/faculty/ViewStudent/Sem4th/AllStudentsViewBHM4th';

import AllStudentsViewBCA5th from './components/faculty/ViewStudent/Sem5th/AllStudentsViewBCA5th';
import AllStudentsViewBBA5th from './components/faculty/ViewStudent/Sem5th/AllStudentsViewBBA5th';
import AllStudentsViewBHM5th from './components/faculty/ViewStudent/Sem5th/AllStudentsViewBHM5th';

import AllStudentsViewBCA6th from './components/faculty/ViewStudent/Sem6th/AllStudentsViewBCA6th';
import AllStudentsViewBBA6th from './components/faculty/ViewStudent/Sem6th/AllStudentsViewBBA6th';
import AllStudentsViewBHM6th from './components/faculty/ViewStudent/Sem6th/AllStudentsViewBHM6th';

import TotalClassAttendedBCA from './components/faculty/ClassAttended/BCATotalAttendance/TotalClassAttendedBCA';
import TotalDsaAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem1st/TotalDsaAttendance';
import TotalOsAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem1st/TotalOsAttendance';
import TotalOopsAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem1st/TotalOopsAttendance';

import TotalDbmsAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem2nd/TotalDbmsAttendance';
import TotalPythonAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem2nd/TotalPythonAttendance';
import TotalNetworkingAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem2nd/TotalNetworkingAttendance';

import TotalItAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem3rd/TotalItAttendance';
import TotalJavaAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem3rd/TotalJavaAttendance';
import TotalCAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem3rd/TotalCAttendance';

import TotalDjangoAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem4th/TotalDjangoAttendance';
import TotalflaskAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem4th/TotalflaskAttendance';
import TotalwebdevAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem4th/TotalwebdevAttendance';

import TotalmeanAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem5th/TotalmeanAttendance';
import TotalmernAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem5th/TotalmernAttendance';
import TotalmysqlAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem5th/TotalmysqlAttendance';

import TotalaptitudeAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem6th/TotalaptitudeAttendance';
import TotaldesigningAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem6th/TotaldesigningAttendance';
import TotalmultimediaAttendance from './components/faculty/ClassAttended/BCATotalAttendance/Sem6th/TotalmultimediaAttendance';

// BBA TOTAL ATTENDANCE 
import TotalClassAttendedBBA from './components/faculty/ClassAttended/BBATotalAttendance/TotalClassAttendedBBA';
import TotalaccountsAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem1st/TotalaccountsAttendance';
import TotalmathsAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem1st/TotalmathsAttendance';
import TotalstatisticsAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem1st/TotalstatisticsAttendance';

import TotalmanagementAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem2nd/TotalmanagementAttendance';
import TotalretailmanagementAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem2nd/TotalretailmanagementAttendance';
import TotalsalesAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem2nd/TotalsalesAttendance';

import TotalconsumerbehaviourAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem3rd/TotalconsumerbehaviourAttendance';
import TotalfinancialaccountingAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem3rd/TotalfinancialaccountingAttendance';
import TotalmacroeconomicsAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem3rd/TotalmacroeconomicsAttendance';

import TotalcalculusAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem4th/TotalcalculusAttendance';
import TotalcommunicationAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem4th/TotalcommunicationAttendance';
import TotalproductmanagementAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem4th/TotalproductmanagementAttendance';

import TotalbusinessmathAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem5th/TotalbusinessmathAttendance';
import TotalcomputingAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem5th/TotalcomputingAttendance';
import TotallanguagelabAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem5th/TotallanguagelabAttendance';

import TotalbusinessaccountingAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem6th/TotalbusinessaccountingAttendance';
import TotalbusinesslawAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem6th/TotalbusinesslawAttendance';
import TotalsoftwarelabAttendance from './components/faculty/ClassAttended/BBATotalAttendance/Sem6th/TotalsoftwarelabAttendance';

// BHM TOTAL ATTENDANCE 
import TotalClassAttendedBHM from './components/faculty/ClassAttended/BHMTotalAttendance/TotalClassAttendedBHM';
import TotalcateringsciencesAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem1st/TotalcateringsciencesAttendance';
import TotalfoodpreparationAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem1st/TotalfoodpreparationAttendance';
import TotalkitchenservicesAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem1st/TotalkitchenservicesAttendance';

import TotalcustomerserviceAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem2nd/TotalcustomerserviceAttendance';
import TotalhospitalityservicesAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem2nd/TotalhospitalityservicesAttendance';
import TotaloperationsAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem2nd/TotaloperationsAttendance';

import TotalhousekeepingAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem3rd/TotalhousekeepingAttendance';
import TotalleadershipskillsAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem3rd/TotalleadershipskillsAttendance';
import TotaltourismmarketingAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem3rd/TotaltourismmarketingAttendance';

import TotalfoodscienceAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem4th/TotalfoodscienceAttendance';
import TotalhrmanagementAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem4th/TotalhrmanagementAttendance';
import TotalpublicrelationsAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem4th/TotalpublicrelationsAttendance';

import TotalfoodsafetyAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem5th/TotalfoodsafetyAttendance';
import TotalnutritionAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem5th/TotalnutritionAttendance';
import TotalsoftskillsAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem5th/TotalsoftskillsAttendance';

import TotalhotellawaAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem6th/TotalhotellawaAttendance';
import TotalhumanresourcesAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem6th/TotalhumanresourcesAttendance';
import TotalinternationalbakingAttendance from './components/faculty/ClassAttended/BHMTotalAttendance/Sem6th/TotalinternationalbakingAttendance';


import AddFaculty from './components/admin/AddFaculty';

import FacultyChangePassword from './components/admin/Change_Password/Faculty/FacultyChangePassword';
import FacultyChangePassForm from './components/admin/Change_Password/Faculty/FacultyChangePassForm';

import PendingOrRejectedStudentsView from './components/admin/All_Student_View_Admin/Pending_Or_Rejected/PendingOrRejectedStudentsView';
import OtpSubmission from './components/Login/ForgetPassword/Student/OtpSubmission';

import SemesterPanelFaculty from './components/faculty/Result/SemesterPanel';

import ResultBCA1st from './components/faculty/Result/Sem1st/BCA/ResultBCA';
import DSA1stSemMarksUploadFormBCA1st from './components/faculty/Result/Sem1st/BCA/DSAMarksUploadFormBCA';
import OS1stSemMarksUploadFormBCA1st from './components/faculty/Result/Sem1st/BCA/OSMarksUploadFormBCA';
import OOPS1stSemMarksUploadFormBCA1st from './components/faculty/Result/Sem1st/BCA/OOPSMarksUploadFormBCA';

import ResultBBA1st from './components/faculty/Result/Sem1st/BBA/ResultBBA';
import AccountsMarksUploadFormBBA1st from './components/faculty/Result/Sem1st/BBA/AccountsMarksUploadFormBBA';
import MathsMarksUploadFormBBA1st from './components/faculty/Result/Sem1st/BBA/MathsMarksUploadFormBBA';
import StatisticsMarksUploadFormBBA1st from './components/faculty/Result/Sem1st/BBA/StatisticsMarksUploadFormBBA';

import ResultBHM1st from './components/faculty/Result/Sem1st/BHM/ResultBHM';
import CATERINGSCIENCESMarksUploadFormBHM1st from './components/faculty/Result/Sem1st/BHM/CATERINGSCIENCESMarksUploadFormBHM';
import FOODPREPARATIONMarksUploadFormBHM1st from './components/faculty/Result/Sem1st/BHM/FOODPREPARATIONMarksUploadFormBHM';
import KITCHENSERVICESMarksUploadFormBHM1st from './components/faculty/Result/Sem1st/BHM/KITCHENSERVICESMarksUploadFormBHM';

import ResultBCA2nd from './components/faculty/Result/Sem2nd/BCA/ResultBCA2nd';
import DbmsMarksUploadFormBCA2nd from './components/faculty/Result/Sem2nd/BCA/DbmsMarksUploadFormBCA';
import NetworkingMarksUploadFormBCA2nd from './components/faculty/Result/Sem2nd/BCA/NetworkingMarksUploadFormBCA';
import PythonMarksUploadFormBCA2nd from './components/faculty/Result/Sem2nd/BCA/PythonMarksUploadFormBCA';

import ResultBBA2nd from './components/faculty/Result/Sem2nd/BBA/ResultBBA2nd';
import ManagementMarksUploadFormBBA from './components/faculty/Result/Sem2nd/BBA/ManagementMarksUploadFormBBA';
import RetailmanagementMarksUploadFormBBA from './components/faculty/Result/Sem2nd/BBA/RetailmanagementMarksUploadFormBBA';
import SalesMarksUploadFormBBA from './components/faculty/Result/Sem2nd/BBA/SalesMarksUploadFormBBA';

import ResultBHM2nd from './components/faculty/Result/Sem2nd/BHM/ResultBHM2nd';
import CustomerserviceMarksUploadFormBHM from './components/faculty/Result/Sem2nd/BHM/CustomerserviceMarksUploadFormBHM';
import HospitalityservicesMarksUploadFormBHM from './components/faculty/Result/Sem2nd/BHM/HospitalityservicesMarksUploadFormBHM';
import OperationsMarksUploadFormBHM from './components/faculty/Result/Sem2nd/BHM/OperationsMarksUploadFormBHM';

import ResultBCA3rd from './components/faculty/Result/Sem3rd/BCA/ResultBCA3rd';
import CMarksUploadFormBCA from './components/faculty/Result/Sem3rd/BCA/CMarksUploadFormBCA';
import ItMarksUploadFormBCA from './components/faculty/Result/Sem3rd/BCA/ItMarksUploadFormBCA';
import JavaMarksUploadFormBCA from './components/faculty/Result/Sem3rd/BCA/JavaMarksUploadFormBCA';

import ResultBBA3rd from './components/faculty/Result/Sem3rd/BBA/ResultBBA3rd';
import ConsumerbehaviourMarksUploadFormBBA from './components/faculty/Result/Sem3rd/BBA/ConsumerbehaviourMarksUploadFormBBA';
import FinancialaccountingMarksUploadFormBBA from './components/faculty/Result/Sem3rd/BBA/FinancialaccountingMarksUploadFormBBA';
import MacroeconomicsMarksUploadFormBBA from './components/faculty/Result/Sem3rd/BBA/MacroeconomicsMarksUploadFormBBA';

import ResultBHM3rd from './components/faculty/Result/Sem3rd/BHM/ResultBHM3rd';
import HousekeepingMarksUploadFormBHM from './components/faculty/Result/Sem3rd/BHM/HousekeepingMarksUploadFormBHM';
import LeadershipskillsMarksUploadFormBHM from './components/faculty/Result/Sem3rd/BHM/LeadershipskillsMarksUploadFormBHM';
import TourismmarketingMarksUploadFormBHM from './components/faculty/Result/Sem3rd/BHM/TourismmarketingMarksUploadFormBHM';

import ResultBCA4th from './components/faculty/Result/Sem4th/BCA/ResultBCA4th';
import DjangoMarksUploadFormBCA from './components/faculty/Result/Sem4th/BCA/DjangoMarksUploadFormBCA';
import FlaskMarksUploadFormBCA from './components/faculty/Result/Sem4th/BCA/FlaskMarksUploadFormBCA';
import WebdevMarksUploadFormBCA from './components/faculty/Result/Sem4th/BCA/WebdevMarksUploadFormBCA';

import ResultBBA4th from './components/faculty/Result/Sem4th/BBA/ResultBBA4th';
import CalculusMarksUploadFormBBA from './components/faculty/Result/Sem4th/BBA/CalculusMarksUploadFormBBA';
import CommunicationMarksUploadFormBBA from './components/faculty/Result/Sem4th/BBA/CommunicationMarksUploadFormBBA';
import ProductmanagementMarksUploadFormBBA from './components/faculty/Result/Sem4th/BBA/ProductmanagementMarksUploadFormBBA';

import ResultBHM4th from './components/faculty/Result/Sem4th/BHM/ResultBHM4th';
import FoodscienceMarksUploadFormBHM from './components/faculty/Result/Sem4th/BHM/FoodscienceMarksUploadFormBHM';
import HrmanagementMarksUploadFormBHM from './components/faculty/Result/Sem4th/BHM/HrmanagementMarksUploadFormBHM';
import PublicrelationsMarksUploadFormBHM from './components/faculty/Result/Sem4th/BHM/PublicrelationsMarksUploadFormBHM';

import ResultBCA5th from './components/faculty/Result/Sem5th/BCA/ResultBCA5th';
import MeanMarksUploadFormBCA from './components/faculty/Result/Sem5th/BCA/MeanMarksUploadFormBCA';
import MernMarksUploadFormBCA from './components/faculty/Result/Sem5th/BCA/MernMarksUploadFormBCA';
import MysqlMarksUploadFormBCA from './components/faculty/Result/Sem5th/BCA/MysqlMarksUploadFormBCA';

import ResultBBA5th from './components/faculty/Result/Sem5th/BBA/ResultBBA5th';
import BusinessmathMarksUploadFormBBA from './components/faculty/Result/Sem5th/BBA/BusinessmathMarksUploadFormBBA';
import ComputingMarksUploadFormBBA from './components/faculty/Result/Sem5th/BBA/ComputingMarksUploadFormBBA';
import LanguagelabMarksUploadFormBBA from './components/faculty/Result/Sem5th/BBA/LanguagelabMarksUploadFormBBA';

import ResultBHM5th from './components/faculty/Result/Sem5th/BHM/ResultBHM5th';
import FoodsafetyMarksUploadFormBHM from './components/faculty/Result/Sem5th/BHM/FoodsafetyMarksUploadFormBHM';
import NutritionMarksUploadFormBHM from './components/faculty/Result/Sem5th/BHM/NutritionMarksUploadFormBHM';
import SoftskillsMarksUploadFormBHM from './components/faculty/Result/Sem5th/BHM/SoftskillsMarksUploadFormBHM';

import ResultBCA6th from './components/faculty/Result/Sem6th/BCA/ResultBCA6th';
import AptitudeMarksUploadFormBCA from './components/faculty/Result/Sem6th/BCA/AptitudeMarksUploadFormBCA';
import DesigningMarksUploadFormBCA from './components/faculty/Result/Sem6th/BCA/DesigningMarksUploadFormBCA';
import MultimediaMarksUploadFormBCA from './components/faculty/Result/Sem6th/BCA/MultimediaMarksUploadFormBCA';

import ResultBBA6th from './components/faculty/Result/Sem6th/BBA/ResultBBA6th';
import BusinessaccountingMarksUploadFormBBA from './components/faculty/Result/Sem6th/BBA/BusinessaccountingMarksUploadFormBBA';
import BusinesslawMarksUploadFormBBA from './components/faculty/Result/Sem6th/BBA/BusinesslawMarksUploadFormBBA';
import SoftwarelabMarksUploadFormBBA from './components/faculty/Result/Sem6th/BBA/SoftwarelabMarksUploadFormBBA';

import ResultBHM6th from './components/faculty/Result/Sem6th/BHM/ResultBHM6th';
import HotellawMarksUploadFormBHM from './components/faculty/Result/Sem6th/BHM/HotellawMarksUploadFormBHM';
import HumanresourcesMarksUploadFormBHM from './components/faculty/Result/Sem6th/BHM/HumanresourcesMarksUploadFormBHM';
import InternationalbakingMarksUploadFormBHM from './components/faculty/Result/Sem6th/BHM/InternationalbakingMarksUploadFormBHM';

import PromoteBca1sem from './components/admin/Promotion_Student/BCA/Sem1st/PromoteBca1sem';
import PromotedBca1stsemApproval from './components/admin/Promotion_Student/BCA/Sem1st/PromotedBca1stsemApproval';
import PromoteBba1sem from './components/admin/Promotion_Student/BBA/Sem1st/PromoteBba1sem';
import PromotedBba1stsemApproval from './components/admin/Promotion_Student/BBA/Sem1st/PromotedBba1stsemApproval';
import PromoteBhm1sem from './components/admin/Promotion_Student/BHM/Sem1st/PromoteBhm1sem';
import PromotedBhm1stsemApproval from './components/admin/Promotion_Student/BHM/Sem1st/PromotedBhm1stsemApproval';

import PromoteBca2ndsem from './components/admin/Promotion_Student/BCA/Sem2nd/PromoteBca2ndsem';
import PromotedBca2ndsemApproval from './components/admin/Promotion_Student/BCA/Sem2nd/PromotedBca2ndsemApproval';
import PromoteBba2ndsem from './components/admin/Promotion_Student/BBA/Sem2nd/PromoteBba2ndsem';
import PromotedBba2ndsemApproval from './components/admin/Promotion_Student/BBA/Sem2nd/PromotedBba2ndsemApproval';
import PromoteBhm2ndsem from './components/admin/Promotion_Student/BHM/Sem2nd/PromoteBhm2ndsem';
import PromotedBhm2ndsemApproval from './components/admin/Promotion_Student/BHM/Sem2nd/PromotedBhm2ndsemApproval';

import PromoteBca3rdsem from './components/admin/Promotion_Student/BCA/Sem3rd/PromoteBca3rdsem';
import PromotedBca3rdsemApproval from './components/admin/Promotion_Student/BCA/Sem3rd/PromotedBca3rdsemApproval';
import PromoteBba3rdsem from './components/admin/Promotion_Student/BBA/Sem3rd/PromoteBba3rdsem';
import PromotedBba3rdsemApproval from './components/admin/Promotion_Student/BBA/Sem3rd/PromotedBba3rdsemApproval';
import PromoteBhm3rdsem from './components/admin/Promotion_Student/BHM/Sem3rd/PromoteBhm3rdsem';
import PromotedBhm3rdsemApproval from './components/admin/Promotion_Student/BHM/Sem3rd/PromotedBhm3rdsemApproval';

import PromoteBca4thsem from './components/admin/Promotion_Student/BCA/Sem4th/PromoteBca4thsem';
import PromotedBca4thsemApproval from './components/admin/Promotion_Student/BCA/Sem4th/PromotedBca4thsemApproval';
import PromoteBba4thsem from './components/admin/Promotion_Student/BBA/Sem4th/PromoteBba4thsem';
import PromotedBba4thsemApproval from './components/admin/Promotion_Student/BBA/Sem4th/PromotedBba4thsemApproval';
import PromoteBhm4thsem from './components/admin/Promotion_Student/BHM/Sem4th/PromoteBhm4thsem';
import PromotedBhm4thsemApproval from './components/admin/Promotion_Student/BHM/Sem4th/PromotedBhm4thsemApproval';

import PromoteBca5thsem from './components/admin/Promotion_Student/BCA/Sem5th/PromoteBca5thsem';
import PromotedBca5thsemApproval from './components/admin/Promotion_Student/BCA/Sem5th/PromotedBca5thsemApproval';
import PromoteBba5thsem from './components/admin/Promotion_Student/BBA/Sem5th/PromoteBba5thsem';
import PromotedBba5thsemApproval from './components/admin/Promotion_Student/BBA/Sem5th/PromotedBba5thsemApproval';
import PromoteBhm5thsem from './components/admin/Promotion_Student/BHM/Sem5th/PromoteBhm5thsem';
import PromotedBhm5thsemApproval from './components/admin/Promotion_Student/BHM/Sem5th/PromotedBhm5thsemApproval';

import PromoteBca6thsem from './components/admin/Promotion_Student/BCA/Sem6th/PromoteBca6thsem';
import PromotedBca6thsemApproval from './components/admin/Promotion_Student/BCA/Sem6th/PromotedBca6thsemApproval';
import PromoteBba6thsem from './components/admin/Promotion_Student/BBA/Sem6th/PromoteBba6thsem';
import PromotedBba6thsemApproval from './components/admin/Promotion_Student/BBA/Sem6th/PromotedBba6thsemApproval';
import PromoteBhm6thsem from './components/admin/Promotion_Student/BHM/Sem6th/PromoteBhm6thsem';
import PromotedBhm6thsemApproval from './components/admin/Promotion_Student/BHM/Sem6th/PromotedBhm6thsemApproval';

import SemesterPanelAdminView from './components/admin/All_Student_View_Admin/Approved/SemesterPanel';
import AllStudentsViewBCA1stadminView from './components/admin/All_Student_View_Admin/Approved/Sem1st/AllStudentsViewBCA1st';
import AllStudentsViewBBA1stadminView from './components/admin/All_Student_View_Admin/Approved/Sem1st/AllStudentsViewBBA1st';
import AllStudentsViewBHM1stadminView from './components/admin/All_Student_View_Admin/Approved/Sem1st/AllStudentsViewBHM1st';

import AllStudentsViewBCA2ndadminView from './components/admin/All_Student_View_Admin/Approved/Sem2nd/AllStudentsViewBCA2nd';
import AllStudentsViewBBA2ndadminView from './components/admin/All_Student_View_Admin/Approved/Sem2nd/AllStudentsViewBBA2nd';
import AllStudentsViewBHM2ndadminView from './components/admin/All_Student_View_Admin/Approved/Sem2nd/AllStudentsViewBHM2nd';

import AllStudentsViewBCA3rdadminView from './components/admin/All_Student_View_Admin/Approved/Sem3rd/AllStudentsViewBCA3rd';
import AllStudentsViewBBA3rdadminView from './components/admin/All_Student_View_Admin/Approved/Sem3rd/AllStudentsViewBBA3rd';
import AllStudentsViewBHM3rdadminView from './components/admin/All_Student_View_Admin/Approved/Sem3rd/AllStudentsViewBHM3rd';

import AllStudentsViewBCA4thadminView from './components/admin/All_Student_View_Admin/Approved/Sem4th/AllStudentsViewBCA4th';
import AllStudentsViewBBA4thadminView from './components/admin/All_Student_View_Admin/Approved/Sem4th/AllStudentsViewBBA4th';
import AllStudentsViewBHM4thadminView from './components/admin/All_Student_View_Admin/Approved/Sem4th/AllStudentsViewBHM4th';

import AllStudentsViewBCA5thadminView from './components/admin/All_Student_View_Admin/Approved/Sem5th/AllStudentsViewBCA5th';
import AllStudentsViewBBA5thadminView from './components/admin/All_Student_View_Admin/Approved/Sem5th/AllStudentsViewBBA5th';
import AllStudentsViewBHM5thadminView from './components/admin/All_Student_View_Admin/Approved/Sem5th/AllStudentsViewBHM5th';

import AllStudentsViewBCA6thadminView from './components/admin/All_Student_View_Admin/Approved/Sem6th/AllStudentsViewBCA6th';
import AllStudentsViewBBA6thadminView from './components/admin/All_Student_View_Admin/Approved/Sem6th/AllStudentsViewBBA6th';
import AllStudentsViewBHM6thadminView from './components/admin/All_Student_View_Admin/Approved/Sem6th/AllStudentsViewBHM6th';

import SemesterPanelPass from './components/admin/Change_Password/Student/SemesterPanel';
import AllStudentsViewBCA1stadminPass from './components/admin/Change_Password/Student/Sem1st/AllStudentsViewBCA1st';
import StudentChangePassBCAForm1st from './components/admin/Change_Password/Student/Sem1st/StudentChangePassBCAForm1st';
import AllStudentsViewBBA1stadminPass from './components/admin/Change_Password/Student/Sem1st/AllStudentsViewBBA1st';
import StudentChangePassBBAForm1st from './components/admin/Change_Password/Student/Sem1st/StudentChangePassBBAForm1st';
import AllStudentsViewBHM1stadminPass from './components/admin/Change_Password/Student/Sem1st/AllStudentsViewBHM1st';
import StudentChangePassBHMForm1st from './components/admin/Change_Password/Student/Sem1st/StudentChangePassBHMForm1st';

import AllStudentsViewBCA2ndadminPass from './components/admin/Change_Password/Student/Sem2nd/AllStudentsViewBCA2nd';
import StudentChangePassBCAForm2nd from './components/admin/Change_Password/Student/Sem2nd/StudentChangePassBCAForm2nd';
import AllStudentsViewBBA2ndadminPass from './components/admin/Change_Password/Student/Sem2nd/AllStudentsViewBBA2nd';
import StudentChangePassBBAForm2nd from './components/admin/Change_Password/Student/Sem2nd/StudentChangePassBBAForm2nd';
import AllStudentsViewBHM2ndadminPass from './components/admin/Change_Password/Student/Sem2nd/AllStudentsViewBHM2nd';
import StudentChangePassBHMForm2nd from './components/admin/Change_Password/Student/Sem2nd/StudentChangePassBHMForm2nd';

import AllStudentsViewBCA3rdadminPass from './components/admin/Change_Password/Student/Sem3rd/AllStudentsViewBCA3rd';
import StudentChangePassBCAForm3rd from './components/admin/Change_Password/Student/Sem3rd/StudentChangePassBCAForm3rd';
import AllStudentsViewBBA3rdadminPass from './components/admin/Change_Password/Student/Sem3rd/AllStudentsViewBBA3rd';
import StudentChangePassBBAForm3rd from './components/admin/Change_Password/Student/Sem3rd/StudentChangePassBBAForm3rd';
import AllStudentsViewBHM3rdadminPass from './components/admin/Change_Password/Student/Sem3rd/AllStudentsViewBHM3rd';
import StudentChangePassBHMForm3rd from './components/admin/Change_Password/Student/Sem3rd/StudentChangePassBHMForm3rd';

import AllStudentsViewBCA4thadminPass from './components/admin/Change_Password/Student/Sem4th/AllStudentsViewBCA4th';
import StudentChangePassBCAForm4th from './components/admin/Change_Password/Student/Sem4th/StudentChangePassBCAForm4th';
import AllStudentsViewBBA4thadminPass from './components/admin/Change_Password/Student/Sem4th/AllStudentsViewBBA4th';
import StudentChangePassBBAForm4th from './components/admin/Change_Password/Student/Sem4th/StudentChangePassBBAForm4th';
import AllStudentsViewBHM4thadminPass from './components/admin/Change_Password/Student/Sem4th/AllStudentsViewBHM4th';
import StudentChangePassBHMForm4th from './components/admin/Change_Password/Student/Sem4th/StudentChangePassBHMForm4th';

import AllStudentsViewBCA5thadminPass from './components/admin/Change_Password/Student/Sem5th/AllStudentsViewBCA5th';
import StudentChangePassBCAForm5th from './components/admin/Change_Password/Student/Sem5th/StudentChangePassBCAForm5th';
import AllStudentsViewBBA5thadminPass from './components/admin/Change_Password/Student/Sem5th/AllStudentsViewBBA5th';
import StudentChangePassBBAForm5th from './components/admin/Change_Password/Student/Sem5th/StudentChangePassBBAForm5th';
import AllStudentsViewBHM5thadminPass from './components/admin/Change_Password/Student/Sem5th/AllStudentsViewBHM5th';
import StudentChangePassBHMForm5th from './components/admin/Change_Password/Student/Sem5th/StudentChangePassBHMForm5th';

import AllStudentsViewBCA6thadminPass from './components/admin/Change_Password/Student/Sem6th/AllStudentsViewBCA6th';
import StudentChangePassBCAForm6th from './components/admin/Change_Password/Student/Sem6th/StudentChangePassBCAForm6th';
import AllStudentsViewBBA6thadminPass from './components/admin/Change_Password/Student/Sem6th/AllStudentsViewBBA6th';
import StudentChangePassBBAForm6th from './components/admin/Change_Password/Student/Sem6th/StudentChangePassBBAForm6th';
import AllStudentsViewBHM6thadminPass from './components/admin/Change_Password/Student/Sem6th/AllStudentsViewBHM6th';
import StudentChangePassBHMForm6th from './components/admin/Change_Password/Student/Sem6th/StudentChangePassBHMForm6th';

import All_Passout_Student_List from './components/admin/All_Passout_Student_List';

import SemesterPanelAttendance from './components/faculty/Attendance/SemesterPanel';

import BcaAttendance1st from './components/faculty/Attendance/BCA/Sem1st/BcaAttendance1st';
import BcaDSAAttendancePresented from './components/faculty/Attendance/BCA/Sem1st/BcaDSAAttendancePresented';
import BcaOSAttendancePresented from './components/faculty/Attendance/BCA/Sem1st/BcaOSAttendancePresented';
import BcaOOPSAttendancePresented from './components/faculty/Attendance/BCA/Sem1st/BcaOOPSAttendancePresented';

import BbaAttendance1st from './components/faculty/Attendance/BBA/Sem1st/BbaAttendance1st';
import BbaAccountsAttendancePresented from './components/faculty/Attendance/BBA/Sem1st/BbaAccountsAttendancePresented'
import BbaMathsAttendancePresented from './components/faculty/Attendance/BBA/Sem1st/BbaMathsAttendancePresented'
import BbaStatisticsAttendancePresented from './components/faculty/Attendance/BBA/Sem1st/BbaStatisticsAttendancePresented'

import BhmAttendance1st from './components/faculty/Attendance/BHM/Sem1st/BhmAttendance1st';
import BhmCateringsciencesAttendancePresented from './components/faculty/Attendance/BHM/Sem1st/BhmCateringsciencesAttendancePresented';
import BhmFoodpreparationAttendancePresented from './components/faculty/Attendance/BHM/Sem1st/BhmFoodpreparationAttendancePresented';
import BhmKitchenservicesAttendancePresented from './components/faculty/Attendance/BHM/Sem1st/BhmKitchenservicesAttendancePresented';

import BcaAttendance2nd from './components/faculty/Attendance/BCA/Sem2nd/BcaAttendance2nd';
import BcadbmsAttendancePresented from './components/faculty/Attendance/BCA/Sem2nd/BcadbmsAttendancePresented';
import BcanetworkingAttendancePresented from './components/faculty/Attendance/BCA/Sem2nd/BcanetworkingAttendancePresented';
import BcapythonAttendancePresented from './components/faculty/Attendance/BCA/Sem2nd/BcapythonAttendancePresented';

import BbaAttendance2nd from './components/faculty/Attendance/BBA/Sem2nd/BbaAttendance2nd';
import BbamanagementAttendancePresented from './components/faculty/Attendance/BBA/Sem2nd/BbamanagementAttendancePresented'
import BbaretailmanagementAttendancePresented from './components/faculty/Attendance/BBA/Sem2nd/BbaretailmanagementAttendancePresented'
import BbasalesAttendancePresented from './components/faculty/Attendance/BBA/Sem2nd/BbasalesAttendancePresented'

import BhmAttendance2nd from './components/faculty/Attendance/BHM/Sem2nd/BhmAttendance2nd';
import BhmcustomerserviceAttendancePresented from './components/faculty/Attendance/BHM/Sem2nd/BhmcustomerserviceAttendancePresented';
import BhmhospitalityservicesAttendancePresented from './components/faculty/Attendance/BHM/Sem2nd/BhmhospitalityservicesAttendancePresented';
import BhmoperationsAttendancePresented from './components/faculty/Attendance/BHM/Sem2nd/BhmoperationsAttendancePresented';

import BcaAttendance3rd from './components/faculty/Attendance/BCA/Sem3rd/BcaAttendance3rd';
import BcacAttendancePresented from './components/faculty/Attendance/BCA/Sem3rd/BcacAttendancePresented';
import BcaitAttendancePresented from './components/faculty/Attendance/BCA/Sem3rd/BcaitAttendancePresented';
import BcajavaAttendancePresented from './components/faculty/Attendance/BCA/Sem3rd/BcajavaAttendancePresented';

import BbaAttendance3rd from './components/faculty/Attendance/BBA/Sem3rd/BbaAttendance3rd';
import BbaconsumerbehaviourAttendancePresented from './components/faculty/Attendance/BBA/Sem3rd/BbaconsumerbehaviourAttendancePresented'
import BbafinancialaccountingAttendancePresented from './components/faculty/Attendance/BBA/Sem3rd/BbafinancialaccountingAttendancePresented'
import BbamacroeconomicsAttendancePresented from './components/faculty/Attendance/BBA/Sem3rd/BbamacroeconomicsAttendancePresented'

import BhmAttendance3rd from './components/faculty/Attendance/BHM/Sem3rd/BhmAttendance3rd';
import BhmhousekeepingAttendancePresented from './components/faculty/Attendance/BHM/Sem3rd/BhmhousekeepingAttendancePresented';
import BhmleadershipskillsAttendancePresented from './components/faculty/Attendance/BHM/Sem3rd/BhmleadershipskillsAttendancePresented';
import BhmtourismmarketingAttendancePresented from './components/faculty/Attendance/BHM/Sem3rd/BhmtourismmarketingAttendancePresented';

import BcaAttendance4th from './components/faculty/Attendance/BCA/Sem4th/BcaAttendance4th';
import BcadjangoAttendancePresented from './components/faculty/Attendance/BCA/Sem4th/BcadjangoAttendancePresented';
import BcaflaskAttendancePresented from './components/faculty/Attendance/BCA/Sem4th/BcaflaskAttendancePresented';
import BcawebdevAttendancePresented from './components/faculty/Attendance/BCA/Sem4th/BcawebdevAttendancePresented';

import BbaAttendance4th from './components/faculty/Attendance/BBA/Sem4th/BbaAttendance4th';
import BbacalculusAttendancePresented from './components/faculty/Attendance/BBA/Sem4th/BbacalculusAttendancePresented'
import BbacommunicationAttendancePresented from './components/faculty/Attendance/BBA/Sem4th/BbacommunicationAttendancePresented'
import BbaproductmanagementAttendancePresented from './components/faculty/Attendance/BBA/Sem4th/BbaproductmanagementAttendancePresented'

import BhmAttendance4th from './components/faculty/Attendance/BHM/Sem4th/BhmAttendance4th';
import BhmfoodscienceAttendancePresented from './components/faculty/Attendance/BHM/Sem4th/BhmfoodscienceAttendancePresented';
import BhmhrmanagementAttendancePresented from './components/faculty/Attendance/BHM/Sem4th/BhmhrmanagementAttendancePresented';
import BhmpublicrelationsAttendancePresented from './components/faculty/Attendance/BHM/Sem4th/BhmpublicrelationsAttendancePresented';

import BcaAttendance5th from './components/faculty/Attendance/BCA/Sem5th/BcaAttendance5th';
import BcameanAttendancePresented from './components/faculty/Attendance/BCA/Sem5th/BcameanAttendancePresented';
import BcamernAttendancePresented from './components/faculty/Attendance/BCA/Sem5th/BcamernAttendancePresented';
import BcamysqlAttendancePresented from './components/faculty/Attendance/BCA/Sem5th/BcamysqlAttendancePresented';

import BbaAttendance5th from './components/faculty/Attendance/BBA/Sem5th/BbaAttendance5th';
import BbabusinessmathAttendancePresented from './components/faculty/Attendance/BBA/Sem5th/BbabusinessmathAttendancePresented'
import BbacomputingAttendancePresented from './components/faculty/Attendance/BBA/Sem5th/BbacomputingAttendancePresented'
import BbalanguagelabAttendancePresented from './components/faculty/Attendance/BBA/Sem5th/BbalanguagelabAttendancePresented'

import BhmAttendance5th from './components/faculty/Attendance/BHM/Sem5th/BhmAttendance5th';
import BhmfoodsafetyAttendancePresented from './components/faculty/Attendance/BHM/Sem5th/BhmfoodsafetyAttendancePresented';
import BhmnutritionAttendancePresented from './components/faculty/Attendance/BHM/Sem5th/BhmnutritionAttendancePresented';
import BhmsoftskillsAttendancePresented from './components/faculty/Attendance/BHM/Sem5th/BhmsoftskillsAttendancePresented';

import BcaAttendance6th from './components/faculty/Attendance/BCA/Sem6th/BcaAttendance6th';
import BcaaptitudeAttendancePresented from './components/faculty/Attendance/BCA/Sem6th/BcaaptitudeAttendancePresented';
import BcadesigningAttendancePresented from './components/faculty/Attendance/BCA/Sem6th/BcadesigningAttendancePresented';
import BcamultimediaAttendancePresented from './components/faculty/Attendance/BCA/Sem6th/BcamultimediaAttendancePresented';

import BbaAttendance6th from './components/faculty/Attendance/BBA/Sem6th/BbaAttendance6th';
import BbabusinessaccountingAttendancePresented from './components/faculty/Attendance/BBA/Sem6th/BbabusinessaccountingAttendancePresented'
import BbabusinesslawAttendancePresented from './components/faculty/Attendance/BBA/Sem6th/BbabusinesslawAttendancePresented'
import BbasoftwarelabAttendancePresented from './components/faculty/Attendance/BBA/Sem6th/BbasoftwarelabAttendancePresented'

import BhmAttendance6th from './components/faculty/Attendance/BHM/Sem6th/BhmAttendance6th';
import BhmhotellawAttendancePresented from './components/faculty/Attendance/BHM/Sem6th/BhmhotellawAttendancePresented';
import BhmhumanresourcesAttendancePresented from './components/faculty/Attendance/BHM/Sem6th/BhmhumanresourcesAttendancePresented';
import BhminternationalbakingAttendancePresented from './components/faculty/Attendance/BHM/Sem6th/BhminternationalbakingAttendancePresented';

import FacultyDelete from './components/admin/Delete/Faculty/FacultyDelete';
import FacultyDeleteForm from './components/admin/Delete/Faculty/FacultyDeleteForm';

import SemesterPanelDelete from './components/admin/Delete/Student/SemesterPanel';

import AllStudentsDeleteBCA1stadminDelete from './components/admin/Delete/Student/Sem1st/DeleteStudentsViewBCA1st';
import AllStudentsDeleteBBA1stadminDelete from './components/admin/Delete/Student/Sem1st/DeleteStudentsViewBBA1st';
import AllStudentsDeleteBHM1stadminDelete from './components/admin/Delete/Student/Sem1st/DeleteStudentsViewBHM1st';

import AllStudentsDeleteBCA2ndadminDelete from './components/admin/Delete/Student/Sem2nd/DeleteStudentsViewBCA2nd';
import AllStudentsDeleteBBA2ndadminDelete from './components/admin/Delete/Student/Sem2nd/DeleteStudentsViewBBA2nd';
import AllStudentsDeleteBHM2ndadminDelete from './components/admin/Delete/Student/Sem2nd/DeleteStudentsViewBHM2nd';

import AllStudentsDeleteBCA3rdadminDelete from './components/admin/Delete/Student/Sem3rd/DeleteStudentsViewBCA3rd';
import AllStudentsDeleteBBA3rdadminDelete from './components/admin/Delete/Student/Sem3rd/DeleteStudentsViewBBA3rd';
import AllStudentsDeleteBHM3rdadminDelete from './components/admin/Delete/Student/Sem3rd/DeleteStudentsViewBHM3rd';

import AllStudentsDeleteBCA4thadminDelete from './components/admin/Delete/Student/Sem4th/DeleteStudentsViewBCA4th';
import AllStudentsDeleteBBA4thadminDelete from './components/admin/Delete/Student/Sem4th/DeleteStudentsViewBBA4th';
import AllStudentsDeleteBHM4thadminDelete from './components/admin/Delete/Student/Sem4th/DeleteStudentsViewBHM4th';

import AllStudentsDeleteBCA5thadminDelete from './components/admin/Delete/Student/Sem5th/DeleteStudentsViewBCA5th';
import AllStudentsDeleteBBA5thadminDelete from './components/admin/Delete/Student/Sem5th/DeleteStudentsViewBBA5th';
import AllStudentsDeleteBHM5thadminDelete from './components/admin/Delete/Student/Sem5th/DeleteStudentsViewBHM5th';

import AllStudentsDeleteBCA6thadminDelete from './components/admin/Delete/Student/Sem6th/DeleteStudentsViewBCA6th';
import AllStudentsDeleteBBA6thadminDelete from './components/admin/Delete/Student/Sem6th/DeleteStudentsViewBBA6th';
import AllStudentsDeleteBHM6thadminDelete from './components/admin/Delete/Student/Sem6th/DeleteStudentsViewBHM6th';

import DeleteBca1st from './components/admin/Delete/Student/Sem1st/DeleteBca1st';
import DeleteBba1st from './components/admin/Delete/Student/Sem1st/DeleteBba1st';
import DeleteBhm1st from './components/admin/Delete/Student/Sem1st/DeleteBhm1st';

import DeleteBca2nd from './components/admin/Delete/Student/Sem2nd/DeleteBca2nd';
import DeleteBba2nd from './components/admin/Delete/Student/Sem2nd/DeleteBba2nd';
import DeleteBhm2nd from './components/admin/Delete/Student/Sem2nd/DeleteBhm2nd';

import DeleteBca3rd from './components/admin/Delete/Student/Sem3rd/DeleteBca3rd';
import DeleteBba3rd from './components/admin/Delete/Student/Sem3rd/DeleteBba3rd';
import DeleteBhm3rd from './components/admin/Delete/Student/Sem3rd/DeleteBhm3rd';

import DeleteBca4th from './components/admin/Delete/Student/Sem4th/DeleteBca4th';
import DeleteBba4th from './components/admin/Delete/Student/Sem4th/DeleteBba4th';
import DeleteBhm4th from './components/admin/Delete/Student/Sem4th/DeleteBhm4th';

import DeleteBca5th from './components/admin/Delete/Student/Sem5th/DeleteBca5th';
import DeleteBba5th from './components/admin/Delete/Student/Sem5th/DeleteBba5th';
import DeleteBhm5th from './components/admin/Delete/Student/Sem5th/DeleteBhm5th';

import DeleteBca6th from './components/admin/Delete/Student/Sem6th/DeleteBca6th';
import DeleteBba6th from './components/admin/Delete/Student/Sem6th/DeleteBba6th';
import DeleteBhm6th from './components/admin/Delete/Student/Sem6th/DeleteBhm6th';
import PassoutBca from './components/admin/Delete/Student/Passout/PassoutBca';
import PassoutBba from './components/admin/Delete/Student/Passout/PassoutBba';
import PassoutBhm from './components/admin/Delete/Student/Passout/PassoutBhm';
import PassoutBcaConfirmation from './components/admin/Delete/Student/Passout/PassoutBcaConfirmation';
import PassoutBbaConfirmation from './components/admin/Delete/Student/Passout/PassoutBbaConfirmation';
import PassoutBhmConfirmation from './components/admin/Delete/Student/Passout/PassoutBhmConfirmation';

import NotApprovedBca from './components/admin/Delete/Student/PendingOrRejected/NotApprovedBca';
import NotApprovedBba from './components/admin/Delete/Student/PendingOrRejected/NotApprovedBba';
import NotApprovedBhm from './components/admin/Delete/Student/PendingOrRejected/NotApprovedBhm';

import NotApprovedBcaConfirmation from './components/admin/Delete/Student/PendingOrRejected/NotApprovedBcaConfirmation';
import NotApprovedBbaConfirmation from './components/admin/Delete/Student/PendingOrRejected/NotApprovedBbaConfirmation';
import NotApprovedBhmConfirmation from './components/admin/Delete/Student/PendingOrRejected/NotApprovedBhmConfirmation';

import BcaNoticeUpload from './components/admin/Notice/NoticeUpload/BcaNoticeUpload';
import BbaNoticeUpload from './components/admin/Notice/NoticeUpload/BbaNoticeUpload';
import BhmNoticeUpload from './components/admin/Notice/NoticeUpload/BhmNoticeUpload';

import BcaNoticeView from './components/NoticeView/BcaNoticeView';
import BbaNoticeView from './components/NoticeView/BbaNoticeView';
import BhmNoticeView from './components/NoticeView/BhmNoticeView';

import BcaNoticeDelete from './components/admin/Notice/NoticeDelete/BcaNoticeDelete';
import BbaNoticeDelete from './components/admin/Notice/NoticeDelete/BbaNoticeDelete';
import BhmNoticeDelete from './components/admin/Notice/NoticeDelete/BhmNoticeDelete';
import BcaNoticeDeleteConfirmation from './components/admin/Notice/NoticeDelete/BcaNoticeDeleteConfirmation';
import BbaNoticeDeleteConfirmation from './components/admin/Notice/NoticeDelete/BbaNoticeDeleteConfirmation';
import BhmNoticeDeleteConfirmation from './components/admin/Notice/NoticeDelete/BhmNoticeDeleteConfirmation';

import ForgetEmailSubmission from './components/Login/ForgetPassword/ForgetEmailSubmission';
import ChangePassForm from './components/Login/ForgetPassword/Student/ChangePassForm';
import ForgetOtp from './components/Login/ForgetPassword/Student/ForgetOtp';
import ForgetOtpFaculty from './components/Login/ForgetPassword/FacultyOrAdmin/ForgetOtpFaculty';
import ChangePassFormFaculty from './components/Login/ForgetPassword/FacultyOrAdmin/ChangePassFormFaculty';
import OtpSubmissionFaculty from './components/Login/ForgetPassword/FacultyOrAdmin/OtpSubmissionFaculty';

import ViewAttendanceBca1st from './components/student/Attendance/BCA/ViewAttendanceBca1st';
import ViewAttendanceBca2nd from './components/student/Attendance/BCA/ViewAttendanceBca2nd';
import ViewAttendanceBca3rd from './components/student/Attendance/BCA/ViewAttendanceBca3rd';
import ViewAttendanceBca4th from './components/student/Attendance/BCA/ViewAttendanceBca4th';
import ViewAttendanceBca5th from './components/student/Attendance/BCA/ViewAttendanceBca5th';
import ViewAttendanceBca6th from './components/student/Attendance/BCA/ViewAttendanceBca6th';

import ViewAttendanceBba1st from './components/student/Attendance/BBA/ViewAttendanceBba1st';
import ViewAttendanceBba2nd from './components/student/Attendance/BBA/ViewAttendanceBba2nd';
import ViewAttendanceBba3rd from './components/student/Attendance/BBA/ViewAttendanceBba3rd';
import ViewAttendanceBba4th from './components/student/Attendance/BBA/ViewAttendanceBba4th';
import ViewAttendanceBba5th from './components/student/Attendance/BBA/ViewAttendanceBba5th';
import ViewAttendanceBba6th from './components/student/Attendance/BBA/ViewAttendanceBba6th';

import ViewAttendanceBhm1st from './components/student/Attendance/BHM/ViewAttendanceBhm1st';
import ViewAttendanceBhm2nd from './components/student/Attendance/BHM/ViewAttendanceBhm2nd';
import ViewAttendanceBhm3rd from './components/student/Attendance/BHM/ViewAttendanceBhm3rd';
import ViewAttendanceBhm4th from './components/student/Attendance/BHM/ViewAttendanceBhm4th';
import ViewAttendanceBhm5th from './components/student/Attendance/BHM/ViewAttendanceBhm5th';
import ViewAttendanceBhm6th from './components/student/Attendance/BHM/ViewAttendanceBhm6th';

import ViewResult from './components/student/ViewResult';
import StudentDetails from './components/student/StudentDetails';
import ChangePass from './components/student/ChangePass';
import Error from './components/Error/Error';

import ViewResultBba1st from './components/student/Result/BBA/ViewResultBba1st';
import ViewResultBba2nd from './components/student/Result/BBA/ViewResultBba2nd';
import ViewResultBba3rd from './components/student/Result/BBA/ViewResultBba3rd';
import ViewResultBba4th from './components/student/Result/BBA/ViewResultBba4th';
import ViewResultBba5th from './components/student/Result/BBA/ViewResultBba5th';
import ViewResultBba6th from './components/student/Result/BBA/ViewResultBba6th';

import ViewResultBca1st from './components/student/Result/BCA/ViewResultBca1st';
import ViewResultBca2nd from './components/student/Result/BCA/ViewResultBca2nd';
import ViewResultBca3rd from './components/student/Result/BCA/ViewResultBca3rd';
import ViewResultBca4th from './components/student/Result/BCA/ViewResultBca4th';
import ViewResultBca5th from './components/student/Result/BCA/ViewResultBca5th';
import ViewResultBca6th from './components/student/Result/BCA/ViewResultBca6th';

import ViewResultBhm1st from './components/student/Result/BHM/ViewResultBhm1st';
import ViewResultBhm2nd from './components/student/Result/BHM/ViewResultBhm2nd';
import ViewResultBhm3rd from './components/student/Result/BHM/ViewResultBhm3rd';
import ViewResultBhm4th from './components/student/Result/BHM/ViewResultBhm4th';
import ViewResultBhm5th from './components/student/Result/BHM/ViewResultBhm5th';
import ViewResultBhm6th from './components/student/Result/BHM/ViewResultBhm6th';
import ErrorResultView from './components/Error/ErrorResultView';

import FacultyEditData from './components/admin/EditData/Faculty/FacultyEdit';
import FacultyEditDataView from './components/admin/EditData/Faculty/FacultyEditView';

import SemesterPanelEdit from './components/admin/EditData/Student/SemesterPanel';
import AllStudentsViewBCA1stadminData from './components/admin/EditData/Student/Sem1st/AllStudentsDataBCA1st';
import StudentChangeDataBCAForm1st from './components/admin/EditData/Student/Sem1st/StudentChangeDataBCAForm1st';
import AllStudentsViewBBA1stadminData from './components/admin/EditData/Student/Sem1st/AllStudentsDataBBA1st';
import StudentChangeDataBBAForm1st from './components/admin/EditData/Student/Sem1st/StudentChangeDataBBAForm1st';
import AllStudentsViewBHM1stadminData from './components/admin/EditData/Student/Sem1st/AllStudentsDataBHM1st';
import StudentChangeDataBHMForm1st from './components/admin/EditData/Student/Sem1st/StudentChangeDataBHMForm1st';

import AllStudentsViewBCA2ndadminData from './components/admin/EditData/Student/Sem2nd/AllStudentsDataBCA2nd';
import StudentChangeDataBCAForm2nd from './components/admin/EditData/Student/Sem2nd/StudentChangeDataBCAForm2nd';
import AllStudentsViewBBA2ndadminData from './components/admin/EditData/Student/Sem2nd/AllStudentsDataBBA2nd';
import StudentChangeDataBBAForm2nd from './components/admin/EditData/Student/Sem2nd/StudentChangeDataBBAForm2nd';
import AllStudentsViewBHM2ndadminData from './components/admin/EditData/Student/Sem2nd/AllStudentsDataBHM2nd';
import StudentChangeDataBHMForm2nd from './components/admin/EditData/Student/Sem2nd/StudentChangeDataBHMForm2nd';

import AllStudentsViewBCA3rdadminData from './components/admin/EditData/Student/Sem3rd/AllStudentsDataBCA3rd';
import StudentChangeDataBCAForm3rd from './components/admin/EditData/Student/Sem3rd/StudentChangeDataBCAForm3rd';
import AllStudentsViewBBA3rdadminData from './components/admin/EditData/Student/Sem3rd/AllStudentsDataBBA3rd';
import StudentChangeDataBBAForm3rd from './components/admin/EditData/Student/Sem3rd/StudentChangeDataBBAForm3rd';
import AllStudentsViewBHM3rdadminData from './components/admin/EditData/Student/Sem3rd/AllStudentsDataBHM3rd';
import StudentChangeDataBHMForm3rd from './components/admin/EditData/Student/Sem3rd/StudentChangeDataBHMForm3rd';

import AllStudentsViewBCA4thadminData from './components/admin/EditData/Student/Sem4th/AllStudentsDataBCA4th';
import StudentChangeDataBCAForm4th from './components/admin/EditData/Student/Sem4th/StudentChangeDataBCAForm4th';
import AllStudentsViewBBA4thadminData from './components/admin/EditData/Student/Sem4th/AllStudentsDataBBA4th';
import StudentChangeDataBBAForm4th from './components/admin/EditData/Student/Sem4th/StudentChangeDataBBAForm4th';
import AllStudentsViewBHM4thadminData from './components/admin/EditData/Student/Sem4th/AllStudentsDataBHM4th';
import StudentChangeDataBHMForm4th from './components/admin/EditData/Student/Sem4th/StudentChangeDataBHMForm4th';

import AllStudentsViewBCA5thadminData from './components/admin/EditData/Student/Sem5th/AllStudentsDataBCA5th';
import StudentChangeDataBCAForm5th from './components/admin/EditData/Student/Sem5th/StudentChangeDataBCAForm5th';
import AllStudentsViewBBA5thadminData from './components/admin/EditData/Student/Sem5th/AllStudentsDataBBA5th';
import StudentChangeDataBBAForm5th from './components/admin/EditData/Student/Sem5th/StudentChangeDataBBAForm5th';
import AllStudentsViewBHM5thadminData from './components/admin/EditData/Student/Sem5th/AllStudentsDataBHM5th';
import StudentChangeDataBHMForm5th from './components/admin/EditData/Student/Sem5th/StudentChangeDataBHMForm5th';

import AllStudentsViewBCA6thadminData from './components/admin/EditData/Student/Sem6th/AllStudentsDataBCA6th';
import StudentChangeDataBCAForm6th from './components/admin/EditData/Student/Sem6th/StudentChangeDataBCAForm6th';
import AllStudentsViewBBA6thadminData from './components/admin/EditData/Student/Sem6th/AllStudentsDataBBA6th';
import StudentChangeDataBBAForm6th from './components/admin/EditData/Student/Sem6th/StudentChangeDataBBAForm6th';
import AllStudentsViewBHM6thadminData from './components/admin/EditData/Student/Sem6th/AllStudentsDataBHM6th';
import StudentChangeDataBHMForm6th from './components/admin/EditData/Student/Sem6th/StudentChangeDataBHMForm6th';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Navbar navigation={homeNav} /> <Home /></>} />
        <Route path='/loginStudent' element={<><Navbar navigation={loginNav} /><Login id="Student ID" /></>} />
        <Route path='/loginTeacher' element={<><Navbar navigation={loginNav} /><Login id="Faculty ID" /></>} />
        <Route path='/loginAdmin' element={<><Navbar navigation={loginNav} /><Login id="Admin ID" /></>} />
        <Route path='/adminPanel' element={<AdminPanel />} />
        <Route path='/facultyPanel' element={<FacultyPanel />} />
        <Route path='/studentPanel' element={<StudentPanel />} />
        <Route path='/regStudent' element={<RegistrationForm />} />
        <Route path='/otpSubmission' element={<OtpSubmission />} />
        <Route path='/otpSubmissionFaculty' element={<OtpSubmissionFaculty />} />
        <Route path='/forgetemailSubmission' element={<ForgetEmailSubmission/>} />
        <Route path='/forgetOtp' element={<ForgetOtp/>} />
        <Route path='/forgetOtpFaculty' element={<ForgetOtpFaculty/>} />
        <Route path='/changePassForm' element={<ChangePassForm/>} />
        <Route path='/changePassFormFaculty' element={<ChangePassFormFaculty/>} />

        <Route path='/ViewAttendanceBca1st' element={<ViewAttendanceBca1st />} />
        <Route path='/ViewAttendanceBca2nd' element={<ViewAttendanceBca2nd />} />
        <Route path='/ViewAttendanceBca3rd' element={<ViewAttendanceBca3rd />} />
        <Route path='/ViewAttendanceBca4th' element={<ViewAttendanceBca4th />} />
        <Route path='/ViewAttendanceBca5th' element={<ViewAttendanceBca5th />} />
        <Route path='/ViewAttendanceBca6th' element={<ViewAttendanceBca6th />} />

        <Route path='/ViewAttendanceBba1st' element={<ViewAttendanceBba1st />} />
        <Route path='/ViewAttendanceBba2nd' element={<ViewAttendanceBba2nd />} />
        <Route path='/ViewAttendanceBba3rd' element={<ViewAttendanceBba3rd />} />
        <Route path='/ViewAttendanceBba4th' element={<ViewAttendanceBba4th />} />
        <Route path='/ViewAttendanceBba5th' element={<ViewAttendanceBba5th />} />
        <Route path='/ViewAttendanceBba6th' element={<ViewAttendanceBba6th />} />

        <Route path='/ViewAttendanceBhm1st' element={<ViewAttendanceBhm1st />} />
        <Route path='/ViewAttendanceBhm2nd' element={<ViewAttendanceBhm2nd />} />
        <Route path='/ViewAttendanceBhm3rd' element={<ViewAttendanceBhm3rd />} />
        <Route path='/ViewAttendanceBhm4th' element={<ViewAttendanceBhm4th />} />
        <Route path='/ViewAttendanceBhm5th' element={<ViewAttendanceBhm5th />} />
        <Route path='/ViewAttendanceBhm6th' element={<ViewAttendanceBhm6th />} />

        

        <Route path='/ViewResultBca1st' element={<ViewResultBca1st />} />
        <Route path='/ViewResultBca2nd' element={<ViewResultBca2nd />} />
        <Route path='/ViewResultBca3rd' element={<ViewResultBca3rd />} />
        <Route path='/ViewResultBca4th' element={<ViewResultBca4th />} />
        <Route path='/ViewResultBca5th' element={<ViewResultBca5th />} />
        <Route path='/ViewResultBca6th' element={<ViewResultBca6th />} />

        <Route path='/ViewResultBba1st' element={<ViewResultBba1st />} />
        <Route path='/ViewResultBba2nd' element={<ViewResultBba2nd />} />
        <Route path='/ViewResultBba3rd' element={<ViewResultBba3rd />} />
        <Route path='/ViewResultBba4th' element={<ViewResultBba4th />} />
        <Route path='/ViewResultBba5th' element={<ViewResultBba5th />} />
        <Route path='/ViewResultBba6th' element={<ViewResultBba6th />} />

        <Route path='/ViewResultBhm1st' element={<ViewResultBhm1st />} />
        <Route path='/ViewResultBhm2nd' element={<ViewResultBhm2nd />} />
        <Route path='/ViewResultBhm3rd' element={<ViewResultBhm3rd />} />
        <Route path='/ViewResultBhm4th' element={<ViewResultBhm4th />} />
        <Route path='/ViewResultBhm5th' element={<ViewResultBhm5th />} />
        <Route path='/ViewResultBhm6th' element={<ViewResultBhm6th />} />

        

        <Route path='/viewResult' element={<ViewResult/>} />
        <Route path='/studentDetails' element={<StudentDetails/>} />
        <Route path='/changePassWord' element={<ChangePass/>} />

        <Route path='/semesterPanelAdmin' element={<SemesterPanelAdmin />} />
        <Route path='/promoteBca1stSem' element={<PromoteBca1sem stream="bca"/>} />
        <Route path='/promoteBca1stSemApproval/:id' element={<PromotedBca1stsemApproval stream="bca"/>} />
        <Route path='/promoteBba1stSem' element={<PromoteBba1sem stream="bba"/>} />
        <Route path='/promoteBba1stSemApproval/:id' element={<PromotedBba1stsemApproval stream="bba"/>} />
        <Route path='/promoteBhm1stSem' element={<PromoteBhm1sem stream="bhm"/>} />
        <Route path='/promoteBhm1stSemApproval/:id' element={<PromotedBhm1stsemApproval stream="bhm"/>} />
        
        <Route path='/promoteBca2ndSem' element={<PromoteBca2ndsem stream="bca"/>} />
        <Route path='/promoteBca2ndSemApproval/:id' element={<PromotedBca2ndsemApproval stream="bca"/>} />
        <Route path='/promoteBba2ndSem' element={<PromoteBba2ndsem stream="bba"/>} />
        <Route path='/promoteBba2ndSemApproval/:id' element={<PromotedBba2ndsemApproval stream="bba"/>} />
        <Route path='/promoteBhm2ndSem' element={<PromoteBhm2ndsem stream="bhm"/>} />
        <Route path='/promoteBhm2ndSemApproval/:id' element={<PromotedBhm2ndsemApproval stream="bhm"/>} />
        
        <Route path='/promoteBca3rdSem' element={<PromoteBca3rdsem stream="bca"/>} />
        <Route path='/promoteBca3rdSemApproval/:id' element={<PromotedBca3rdsemApproval stream="bca"/>} />
        <Route path='/promoteBba3rdSem' element={<PromoteBba3rdsem stream="bba"/>} />
        <Route path='/promoteBba3rdSemApproval/:id' element={<PromotedBba3rdsemApproval stream="bba"/>} />
        <Route path='/promoteBhm3rdSem' element={<PromoteBhm3rdsem stream="bhm"/>} />
        <Route path='/promoteBhm3rdSemApproval/:id' element={<PromotedBhm3rdsemApproval stream="bhm"/>} />
        
        <Route path='/promoteBca4thSem' element={<PromoteBca4thsem stream="bca"/>} />
        <Route path='/promoteBca4thSemApproval/:id' element={<PromotedBca4thsemApproval stream="bca"/>} />
        <Route path='/promoteBba4thSem' element={<PromoteBba4thsem stream="bba"/>} />
        <Route path='/promoteBba4thSemApproval/:id' element={<PromotedBba4thsemApproval stream="bba"/>} />
        <Route path='/promoteBhm4thSem' element={<PromoteBhm4thsem stream="bhm"/>} />
        <Route path='/promoteBhm4thSemApproval/:id' element={<PromotedBhm4thsemApproval stream="bhm"/>} />
        
        <Route path='/promoteBca5thSem' element={<PromoteBca5thsem stream="bca"/>} />
        <Route path='/promoteBca5thSemApproval/:id' element={<PromotedBca5thsemApproval stream="bca"/>} />
        <Route path='/promoteBba5thSem' element={<PromoteBba5thsem stream="bba"/>} />
        <Route path='/promoteBba5thSemApproval/:id' element={<PromotedBba5thsemApproval stream="bba"/>} />
        <Route path='/promoteBhm5thSem' element={<PromoteBhm5thsem stream="bhm"/>} />
        <Route path='/promoteBhm5thSemApproval/:id' element={<PromotedBhm5thsemApproval stream="bhm"/>} />
        
        <Route path='/promoteBca6thSem' element={<PromoteBca6thsem stream="bca"/>} />
        <Route path='/promoteBca6thSemApproval/:id' element={<PromotedBca6thsemApproval stream="bca"/>} />
        <Route path='/promoteBba6thSem' element={<PromoteBba6thsem stream="bba"/>} />
        <Route path='/promoteBba6thSemApproval/:id' element={<PromotedBba6thsemApproval stream="bba"/>} />
        <Route path='/promoteBhm6thSem' element={<PromoteBhm6thsem stream="bhm"/>} />
        <Route path='/promoteBhm6thSemApproval/:id' element={<PromotedBhm6thsemApproval stream="bhm"/>} />


        <Route path='/studentVerificationBCA' element={<StudentVerifiactionBCA stream="bca" />} />
        <Route path='/studentVerificationBBA' element={<StudentVerifiactionBBA stream="bba" />} />
        <Route path='/studentVerificationBHM' element={<StudentVerifiactionBHM stream="bhm" />} />

        <Route path='/editStudentApprovedBCA/:id/:email' element={<ConfirmationVerifyStudentBCA />} />
        <Route path='/editStudentRejectedBCA/:id/:email' element={<RejectionVerifyStudentBCA />} />
        <Route path='/editStudentApprovedBBA/:id/:email' element={<ConfirmationVerifyStudentBBA />} />
        <Route path='/editStudentRejectedBBA/:id/:email' element={<RejectionVerifyStudentBBA />} />
        <Route path='/editStudentApprovedBHM/:id/:email' element={<ConfirmationVerifyStudentBHM />} />
        <Route path='/editStudentRejectedBHM/:id/:email' element={<RejectionVerifyStudentBHM />} />

        <Route path='/semPanelViewStudent' element={<SemesterPanel />} />
        <Route path='/allStudentViewBCA1st' element={<AllStudentsViewBCA1st stream="bca"  />} />
        <Route path='/allStudentViewBBA1st' element={<AllStudentsViewBBA1st stream="bba" />} />
        <Route path='/allStudentViewBHM1st' element={<AllStudentsViewBHM1st stream="bhm" />} />
        
        <Route path='/allStudentViewBCA2nd' element={<AllStudentsViewBCA2nd stream="bca"  />} />
        <Route path='/allStudentViewBBA2nd' element={<AllStudentsViewBBA2nd stream="bba" />} />
        <Route path='/allStudentViewBHM2nd' element={<AllStudentsViewBHM2nd stream="bhm" />} />
        
        <Route path='/allStudentViewBCA3rd' element={<AllStudentsViewBCA3rd stream="bca"  />} />
        <Route path='/allStudentViewBBA3rd' element={<AllStudentsViewBBA3rd stream="bba" />} />
        <Route path='/allStudentViewBHM3rd' element={<AllStudentsViewBHM3rd stream="bhm" />} />
        
        <Route path='/allStudentViewBCA4th' element={<AllStudentsViewBCA4th stream="bca"  />} />
        <Route path='/allStudentViewBBA4th' element={<AllStudentsViewBBA4th stream="bba" />} />
        <Route path='/allStudentViewBHM4th' element={<AllStudentsViewBHM4th stream="bhm" />} />
        
        <Route path='/allStudentViewBCA5th' element={<AllStudentsViewBCA5th stream="bca"  />} />
        <Route path='/allStudentViewBBA5th' element={<AllStudentsViewBBA5th stream="bba" />} />
        <Route path='/allStudentViewBHM5th' element={<AllStudentsViewBHM5th stream="bhm" />} />
        
        <Route path='/allStudentViewBCA6th' element={<AllStudentsViewBCA6th stream="bca"  />} />
        <Route path='/allStudentViewBBA6th' element={<AllStudentsViewBBA6th stream="bba" />} />
        <Route path='/allStudentViewBHM6th' element={<AllStudentsViewBHM6th stream="bhm" />} />
        
        <Route path='/totalClassAttendedBCA' element={<TotalClassAttendedBCA />} />
        <Route path='/totalDsaAttendance/:id/:dsaattended' element={<TotalDsaAttendance />} />
        <Route path='/totalOsAttendance/:id/:operatingsystemattended' element={<TotalOsAttendance />} />
        <Route path='/totalOopsAttendance/:id/:oopsattended' element={<TotalOopsAttendance />} />
        
        <Route path='/totalDbmsAttendance/:id/:dbmsattended' element={<TotalDbmsAttendance />} />
        <Route path='/totalPythonAttendance/:id/:pythonattended' element={<TotalPythonAttendance />} />
        <Route path='/totalNetworkingAttendance/:id/:networkingattended' element={<TotalNetworkingAttendance />} />
        
        <Route path='/totalitAttendance/:id/:itattended' element={<TotalItAttendance />} />
        <Route path='/totalJavaAttendance/:id/:javaattended' element={<TotalJavaAttendance />} />
        <Route path='/totalCAttendance/:id/:cattended' element={<TotalCAttendance />} />
        
        <Route path='/TotalDjangoAttendance/:id/:djangoattended' element={<TotalDjangoAttendance />} />
        <Route path='/TotalflaskAttendance/:id/:flaskattended' element={<TotalflaskAttendance />} />
        <Route path='/TotalwebdevAttendance/:id/:webdevattended' element={<TotalwebdevAttendance />} />
        
        <Route path='/TotalmeanAttendance/:id/:meanattended' element={<TotalmeanAttendance />} />
        <Route path='/TotalmernAttendance/:id/:mernattended' element={<TotalmernAttendance />} />
        <Route path='/TotalmysqlAttendance/:id/:mysqlattended' element={<TotalmysqlAttendance />} />
        
        <Route path='/TotalaptitudeAttendance/:id/:aptitudeattended' element={<TotalaptitudeAttendance />} />
        <Route path='/TotaldesigningAttendance/:id/:designingattended' element={<TotaldesigningAttendance />} />
        <Route path='/TotalmultimediaAttendance/:id/:multimediaattended' element={<TotalmultimediaAttendance />} />
        
        <Route path='/totalClassAttendedBBA' element={<TotalClassAttendedBBA />} />
        <Route path='/TotalaccountsAttendance/:id/:accountsattended' element={<TotalaccountsAttendance />} />
        <Route path='/TotalmathsAttendance/:id/:mathsattended' element={<TotalmathsAttendance />} />
        <Route path='/TotalstatisticsAttendance/:id/:statisticsattended' element={<TotalstatisticsAttendance />} />
        
        <Route path='/TotalmanagementAttendance/:id/:managementattended' element={<TotalmanagementAttendance />} />
        <Route path='/TotalretailmanagementAttendance/:id/:retailmanagementattended' element={<TotalretailmanagementAttendance />} />
        <Route path='/TotalsalesAttendance/:id/:salesattended' element={<TotalsalesAttendance />} />
        
        <Route path='/TotalconsumerbehaviourAttendance/:id/:consumerbehaviourattended' element={<TotalconsumerbehaviourAttendance />} />
        <Route path='/TotalfinancialaccountingAttendance/:id/:financialaccountingattended' element={<TotalfinancialaccountingAttendance />} />
        <Route path='/TotalmacroeconomicsAttendance/:id/:macroeconomicsattended' element={<TotalmacroeconomicsAttendance />} />
        
        <Route path='/TotalcalculusAttendance/:id/:calculusattended' element={<TotalcalculusAttendance />} />
        <Route path='/TotalcommunicationAttendance/:id/:communicationattended' element={<TotalcommunicationAttendance />} />
        <Route path='/TotalproductmanagementAttendance/:id/:productmanagementattended' element={<TotalproductmanagementAttendance />} />
        
        <Route path='/TotalbusinessmathAttendance/:id/:businessmathattended' element={<TotalbusinessmathAttendance />} />
        <Route path='/TotalcomputingAttendance/:id/:computingattended' element={<TotalcomputingAttendance />} />
        <Route path='/TotallanguagelabAttendance/:id/:languagelabattended' element={<TotallanguagelabAttendance />} />
        
        <Route path='/TotalbusinessaccountingAttendance/:id/:businessaccountingattended' element={<TotalbusinessaccountingAttendance />} />
        <Route path='/TotalbusinesslawAttendance/:id/:businesslawattended' element={<TotalbusinesslawAttendance />} />
        <Route path='/TotalsoftwarelabAttendance/:id/:softwarelabattended' element={<TotalsoftwarelabAttendance />} />
        
        <Route path='/totalClassAttendedBHM' element={<TotalClassAttendedBHM />} />
        <Route path='/TotalcateringsciencesAttendance/:id/:cateringsciencesattended' element={<TotalcateringsciencesAttendance />} />
        <Route path='/TotalfoodpreparationAttendance/:id/:foodpreparationattended' element={<TotalfoodpreparationAttendance />} />
        <Route path='/TotalkitchenservicesAttendance/:id/:kitchenservicesattended' element={<TotalkitchenservicesAttendance />} />
        
        <Route path='/TotalcustomerserviceAttendance/:id/:customerserviceattended' element={<TotalcustomerserviceAttendance />} />
        <Route path='/TotalhospitalityservicesAttendance/:id/:hospitalityservicesattended' element={<TotalhospitalityservicesAttendance />} />
        <Route path='/TotaloperationsAttendance/:id/:operationsattended' element={<TotaloperationsAttendance />} />
        
        <Route path='/TotalhousekeepingAttendance/:id/:housekeepingattended' element={<TotalhousekeepingAttendance />} />
        <Route path='/TotalleadershipskillsAttendance/:id/:leadershipskillsattended' element={<TotalleadershipskillsAttendance />} />
        <Route path='/TotaltourismmarketingAttendance/:id/:tourismmarketingattended' element={<TotaltourismmarketingAttendance />} />
        
        <Route path='/TotalfoodscienceAttendance/:id/:foodscienceattended' element={<TotalfoodscienceAttendance />} />
        <Route path='/TotalhrmanagementAttendance/:id/:hrmanagementattended' element={<TotalhrmanagementAttendance />} />
        <Route path='/TotalpublicrelationsAttendance/:id/:publicrelationsattended' element={<TotalpublicrelationsAttendance />} />
        
        <Route path='/TotalfoodsafetyAttendance/:id/:foodsafetyattended' element={<TotalfoodsafetyAttendance />} />
        <Route path='/TotalnutritionAttendance/:id/:nutritionattended' element={<TotalnutritionAttendance />} />
        <Route path='/TotalsoftskillsAttendance/:id/:softskillsattended' element={<TotalsoftskillsAttendance />} />
        
        <Route path='/TotalhotellawaAttendance/:id/:hotellawattended' element={<TotalhotellawaAttendance />} />
        <Route path='/TotalhumanresourcesAttendance/:id/:humanresourcesattended' element={<TotalhumanresourcesAttendance />} />
        <Route path='/TotalinternationalbakingAttendance/:id/:internationalbakingattended' element={<TotalinternationalbakingAttendance />} />
        

        <Route path='/addFaculty' element={<AddFaculty />} />


        <Route path='/facultyChangePassword' element={<FacultyChangePassword />} />
        <Route path='/facultyChangePassForm/:id' element={<FacultyChangePassForm />} />
        
        <Route path='/pendingOrRejectedStudentsViewBCA' element={<PendingOrRejectedStudentsView stream="BCA" />} />
        <Route path='/pendingOrRejectedStudentsViewBBA' element={<PendingOrRejectedStudentsView stream="BBA" />} />
        <Route path='/pendingOrRejectedStudentsViewBHM' element={<PendingOrRejectedStudentsView stream="BHM" />} />
        
        <Route path='/semesterPanelFaculty' element={<SemesterPanelFaculty />} />

        <Route path='/resultBCA1st' element={<ResultBCA1st stream="BCA" />} />
        <Route path='/dsa1stSemMarksUploadFormBCA/:id' element={<DSA1stSemMarksUploadFormBCA1st />} />
        <Route path='/os1stSemMarksUploadFormBCA/:id' element={<OS1stSemMarksUploadFormBCA1st />} />
        <Route path='/oops1stSemMarksUploadFormBCA/:id' element={<OOPS1stSemMarksUploadFormBCA1st />} />
        
        <Route path='/resultBBA1st' element={<ResultBBA1st stream="BBA" />} />
        <Route path='/accounts1stSemMarksUploadFormBBA/:id' element={<AccountsMarksUploadFormBBA1st />} />
        <Route path='/maths1stSemMarksUploadFormBBA/:id' element={<MathsMarksUploadFormBBA1st />} />
        <Route path='/statistics1stSemMarksUploadFormBBA/:id' element={<StatisticsMarksUploadFormBBA1st />} />
        
        <Route path='/resultBHM1st' element={<ResultBHM1st stream="BHM" />} />
        <Route path='/CATERINGSCIENCES1stSemMarksUploadFormBHM/:id' element={<CATERINGSCIENCESMarksUploadFormBHM1st />} />
        <Route path='/FOODPREPARATION1stSemMarksUploadFormBHM/:id' element={<FOODPREPARATIONMarksUploadFormBHM1st />} />
        <Route path='/KITCHENSERVICES1stSemMarksUploadFormBHM/:id' element={<KITCHENSERVICESMarksUploadFormBHM1st />} />
        

        <Route path='/resultBCA2nd' element={<ResultBCA2nd stream="BCA" />} />
        <Route path='/dbms2ndSemMarksUploadFormBCA/:id' element={<DbmsMarksUploadFormBCA2nd />} />
        <Route path='/networking2ndSemMarksUploadFormBCA/:id' element={<NetworkingMarksUploadFormBCA2nd />} />
        <Route path='/python2ndSemMarksUploadFormBCA/:id' element={<PythonMarksUploadFormBCA2nd />} />
        
        <Route path='/resultBBA2nd' element={<ResultBBA2nd stream="BBA" />} />
        <Route path='/ManagementMarksUploadFormBBA/:id' element={<ManagementMarksUploadFormBBA />} />
        <Route path='/RetailmanagementMarksUploadFormBBA/:id' element={<RetailmanagementMarksUploadFormBBA />} />
        <Route path='/SalesMarksUploadFormBBA/:id' element={<SalesMarksUploadFormBBA />} />
        
        <Route path='/resultBHM2nd' element={<ResultBHM2nd stream="BHM" />} />
        <Route path='/CustomerserviceMarksUploadFormBHM/:id' element={<CustomerserviceMarksUploadFormBHM />} />
        <Route path='/HospitalityservicesMarksUploadFormBHM/:id' element={<HospitalityservicesMarksUploadFormBHM />} />
        <Route path='/OperationsMarksUploadFormBHM/:id' element={<OperationsMarksUploadFormBHM />} />
        
        <Route path='/resultBCA3rd' element={<ResultBCA3rd stream="BCA" />} />
        <Route path='/CMarksUploadFormBCA/:id' element={<CMarksUploadFormBCA />} />
        <Route path='/ItMarksUploadFormBCA/:id' element={<ItMarksUploadFormBCA />} />
        <Route path='/JavaMarksUploadFormBCA/:id' element={<JavaMarksUploadFormBCA />} />
        
        <Route path='/resultBBA3rd' element={<ResultBBA3rd stream="BBA" />} />
        <Route path='/ConsumerbehaviourMarksUploadFormBBA/:id' element={<ConsumerbehaviourMarksUploadFormBBA />} />
        <Route path='/FinancialaccountingMarksUploadFormBBA/:id' element={<FinancialaccountingMarksUploadFormBBA />} />
        <Route path='/MacroeconomicsMarksUploadFormBBA/:id' element={<MacroeconomicsMarksUploadFormBBA />} />
        
        <Route path='/resultBHM3rd' element={<ResultBHM3rd stream="BHM" />} />
        <Route path='/HousekeepingMarksUploadFormBHM/:id' element={<HousekeepingMarksUploadFormBHM />} />
        <Route path='/LeadershipskillsMarksUploadFormBHM/:id' element={<LeadershipskillsMarksUploadFormBHM />} />
        <Route path='/TourismmarketingMarksUploadFormBHM/:id' element={<TourismmarketingMarksUploadFormBHM />} />
        
        <Route path='/resultBCA4th' element={<ResultBCA4th stream="BCA" />} />
        <Route path='/DjangoMarksUploadFormBCA/:id' element={<DjangoMarksUploadFormBCA />} />
        <Route path='/FlaskMarksUploadFormBCA/:id' element={<FlaskMarksUploadFormBCA />} />
        <Route path='/WebdevMarksUploadFormBCA/:id' element={<WebdevMarksUploadFormBCA />} />
        
        <Route path='/resultBBA4th' element={<ResultBBA4th stream="BBA" />} />
        <Route path='/CalculusMarksUploadFormBBA/:id' element={<CalculusMarksUploadFormBBA />} />
        <Route path='/CommunicationMarksUploadFormBBA/:id' element={<CommunicationMarksUploadFormBBA />} />
        <Route path='/ProductmanagementMarksUploadFormBBA/:id' element={<ProductmanagementMarksUploadFormBBA />} />
        
        <Route path='/resultBHM4th' element={<ResultBHM4th stream="BHM" />} />
        <Route path='/FoodscienceMarksUploadFormBHM/:id' element={<FoodscienceMarksUploadFormBHM />} />
        <Route path='/HrmanagementMarksUploadFormBHM/:id' element={<HrmanagementMarksUploadFormBHM />} />
        <Route path='/PublicrelationsMarksUploadFormBHM/:id' element={<PublicrelationsMarksUploadFormBHM />} />
        
        <Route path='/resultBCA5th' element={<ResultBCA5th stream="BCA" />} />
        <Route path='/MeanMarksUploadFormBCA/:id' element={<MeanMarksUploadFormBCA />} />
        <Route path='/MernMarksUploadFormBCA/:id' element={<MernMarksUploadFormBCA />} />
        <Route path='/MysqlMarksUploadFormBCA/:id' element={<MysqlMarksUploadFormBCA />} />
        
        <Route path='/resultBBA5th' element={<ResultBBA5th stream="BBA" />} />
        <Route path='/BusinessmathMarksUploadFormBBA/:id' element={<BusinessmathMarksUploadFormBBA />} />
        <Route path='/ComputingMarksUploadFormBBA/:id' element={<ComputingMarksUploadFormBBA />} />
        <Route path='/LanguagelabMarksUploadFormBBA/:id' element={<LanguagelabMarksUploadFormBBA />} />
        
        <Route path='/resultBHM5th' element={<ResultBHM5th stream="BHM" />} />
        <Route path='/FoodsafetyMarksUploadFormBHM/:id' element={<FoodsafetyMarksUploadFormBHM />} />
        <Route path='/NutritionMarksUploadFormBHM/:id' element={<NutritionMarksUploadFormBHM />} />
        <Route path='/SoftskillsMarksUploadFormBHM/:id' element={<SoftskillsMarksUploadFormBHM />} />
        
        <Route path='/resultBCA6th' element={<ResultBCA6th stream="BCA" />} />
        <Route path='/AptitudeMarksUploadFormBCA/:id' element={<AptitudeMarksUploadFormBCA />} />
        <Route path='/DesigningMarksUploadFormBCA/:id' element={<DesigningMarksUploadFormBCA />} />
        <Route path='/MultimediaMarksUploadFormBCA/:id' element={<MultimediaMarksUploadFormBCA />} />
        
        <Route path='/resultBBA6th' element={<ResultBBA6th stream="BBA" />} />
        <Route path='/BusinessaccountingMarksUploadFormBBA/:id' element={<BusinessaccountingMarksUploadFormBBA />} />
        <Route path='/BusinesslawMarksUploadFormBBA/:id' element={<BusinesslawMarksUploadFormBBA />} />
        <Route path='/SoftwarelabMarksUploadFormBBA/:id' element={<SoftwarelabMarksUploadFormBBA />} />
        
        <Route path='/resultBHM6th' element={<ResultBHM6th stream="BHM" />} />
        <Route path='/HotellawMarksUploadFormBHM/:id' element={<HotellawMarksUploadFormBHM />} />
        <Route path='/HumanresourcesMarksUploadFormBHM/:id' element={<HumanresourcesMarksUploadFormBHM />} />
        <Route path='/InternationalbakingMarksUploadFormBHM/:id' element={<InternationalbakingMarksUploadFormBHM />} />
        
        <Route path='/SemesterPanelAdminView' element={<SemesterPanelAdminView />} />
        <Route path='/adminallStudentViewBCA1st' element={<AllStudentsViewBCA1stadminView stream="bca"  />} />
        <Route path='/adminallStudentViewBBA1st' element={<AllStudentsViewBBA1stadminView stream="bba" />} />
        <Route path='/adminallStudentViewBHM1st' element={<AllStudentsViewBHM1stadminView stream="bhm" />} />
        
        <Route path='/adminallStudentViewBCA2nd' element={<AllStudentsViewBCA2ndadminView stream="bca"  />} />
        <Route path='/adminallStudentViewBBA2nd' element={<AllStudentsViewBBA2ndadminView stream="bba" />} />
        <Route path='/adminallStudentViewBHM2nd' element={<AllStudentsViewBHM2ndadminView stream="bhm" />} />
        
        <Route path='/adminallStudentViewBCA3rd' element={<AllStudentsViewBCA3rdadminView stream="bca"  />} />
        <Route path='/adminallStudentViewBBA3rd' element={<AllStudentsViewBBA3rdadminView stream="bba" />} />
        <Route path='/adminallStudentViewBHM3rd' element={<AllStudentsViewBHM3rdadminView stream="bhm" />} />
        
        <Route path='/adminallStudentViewBCA4th' element={<AllStudentsViewBCA4thadminView stream="bca"  />} />
        <Route path='/adminallStudentViewBBA4th' element={<AllStudentsViewBBA4thadminView stream="bba" />} />
        <Route path='/adminallStudentViewBHM4th' element={<AllStudentsViewBHM4thadminView stream="bhm" />} />
        
        <Route path='/adminallStudentViewBCA5th' element={<AllStudentsViewBCA5thadminView stream="bca"  />} />
        <Route path='/adminallStudentViewBBA5th' element={<AllStudentsViewBBA5thadminView stream="bba" />} />
        <Route path='/adminallStudentViewBHM5th' element={<AllStudentsViewBHM5thadminView stream="bhm" />} />
        
        <Route path='/adminallStudentViewBCA6th' element={<AllStudentsViewBCA6thadminView stream="bca"  />} />
        <Route path='/adminallStudentViewBBA6th' element={<AllStudentsViewBBA6thadminView stream="bba" />} />
        <Route path='/adminallStudentViewBHM6th' element={<AllStudentsViewBHM6thadminView stream="bhm" />} />
        
        <Route path='/SemesterPanelPass' element={<SemesterPanelPass />} />
        <Route path='/adminallStudentPassBCA1st' element={<AllStudentsViewBCA1stadminPass stream="bca"  />} />
        <Route path='/studentChangePassBCAForm1st/:id' element={<StudentChangePassBCAForm1st />} />
        <Route path='/adminallStudentPassBBA1st' element={<AllStudentsViewBBA1stadminPass stream="bba" />} />
        <Route path='/studentChangePassBBAForm1st/:id' element={<StudentChangePassBBAForm1st />} />
        <Route path='/adminallStudentPassBHM1st' element={<AllStudentsViewBHM1stadminPass stream="bhm" />} />
        <Route path='/studentChangePassBHMForm1st/:id' element={<StudentChangePassBHMForm1st />} />

        <Route path='/adminallStudentPassBCA2nd' element={<AllStudentsViewBCA2ndadminPass stream="bca"  />} />
        <Route path='/studentChangePassBCAForm2nd/:id' element={<StudentChangePassBCAForm2nd />} />
        <Route path='/adminallStudentPassBBA2nd' element={<AllStudentsViewBBA2ndadminPass stream="bba" />} />
        <Route path='/studentChangePassBBAForm2nd/:id' element={<StudentChangePassBBAForm2nd />} />
        <Route path='/adminallStudentPassBHM2nd' element={<AllStudentsViewBHM2ndadminPass stream="bhm" />} />
        <Route path='/studentChangePassBHMForm2nd/:id' element={<StudentChangePassBHMForm2nd />} />

        <Route path='/adminallStudentPassBCA3rd' element={<AllStudentsViewBCA3rdadminPass stream="bca"  />} />
        <Route path='/studentChangePassBCAForm3rd/:id' element={<StudentChangePassBCAForm3rd />} />
        <Route path='/adminallStudentPassBBA3rd' element={<AllStudentsViewBBA3rdadminPass stream="bba" />} />
        <Route path='/studentChangePassBBAForm3rd/:id' element={<StudentChangePassBBAForm3rd />} />
        <Route path='/adminallStudentPassBHM3rd' element={<AllStudentsViewBHM3rdadminPass stream="bhm" />} />
        <Route path='/studentChangePassBHMForm3rd/:id' element={<StudentChangePassBHMForm3rd />} />

        <Route path='/adminallStudentPassBCA4th' element={<AllStudentsViewBCA4thadminPass stream="bca"  />} />
        <Route path='/studentChangePassBCAForm4th/:id' element={<StudentChangePassBCAForm4th />} />
        <Route path='/adminallStudentPassBBA4th' element={<AllStudentsViewBBA4thadminPass stream="bba" />} />
        <Route path='/studentChangePassBBAForm4th/:id' element={<StudentChangePassBBAForm4th />} />
        <Route path='/adminallStudentPassBHM4th' element={<AllStudentsViewBHM4thadminPass stream="bhm" />} />
        <Route path='/studentChangePassBHMForm4th/:id' element={<StudentChangePassBHMForm4th />} />

        <Route path='/adminallStudentPassBCA5th' element={<AllStudentsViewBCA5thadminPass stream="bca"  />} />
        <Route path='/studentChangePassBCAForm5th/:id' element={<StudentChangePassBCAForm5th />} />
        <Route path='/adminallStudentPassBBA5th' element={<AllStudentsViewBBA5thadminPass stream="bba" />} />
        <Route path='/studentChangePassBBAForm5th/:id' element={<StudentChangePassBBAForm5th />} />
        <Route path='/adminallStudentPassBHM5th' element={<AllStudentsViewBHM5thadminPass stream="bhm" />} />
        <Route path='/studentChangePassBHMForm5th/:id' element={<StudentChangePassBHMForm5th />} />

        <Route path='/adminallStudentPassBCA6th' element={<AllStudentsViewBCA6thadminPass stream="bca"  />} />
        <Route path='/studentChangePassBCAForm6th/:id' element={<StudentChangePassBCAForm6th />} />
        <Route path='/adminallStudentPassBBA6th' element={<AllStudentsViewBBA6thadminPass stream="bba" />} />
        <Route path='/studentChangePassBBAForm6th/:id' element={<StudentChangePassBBAForm6th />} />
        <Route path='/adminallStudentPassBHM6th' element={<AllStudentsViewBHM6thadminPass stream="bhm" />} />
        <Route path='/studentChangePassBHMForm6th/:id' element={<StudentChangePassBHMForm6th />} />

        <Route path='/AllPassoutStudentListBCA' element={<All_Passout_Student_List stream="BCA" />} />
        <Route path='/AllPassoutStudentListBBA' element={<All_Passout_Student_List stream="BBA" />} />
        <Route path='/AllPassoutStudentListBHM' element={<All_Passout_Student_List stream="BHM" />} />

        <Route path='/SemesterPanelAttendance' element={<SemesterPanelAttendance />} />

        <Route path='/bcaAttendance1st' element={<BcaAttendance1st stream="bca" />} />
        <Route path='/bcaDSAAttendancePresented/:id/:dsa' element={<BcaDSAAttendancePresented />} />
        <Route path='/bcaOSAttendancePresented/:id/:operatingsystem' element={<BcaOSAttendancePresented />} />
        <Route path='/bcaOOPSAttendancePresented/:id/:oops' element={<BcaOOPSAttendancePresented />} />

        <Route path='/bbaAttendance1st' element={<BbaAttendance1st stream="bba" />} />
        <Route path='/bbaAccountsAttendancePresented/:id/:accounts' element={<BbaAccountsAttendancePresented />} />
        <Route path='/bbaMathsAttendancePresented/:id/:maths' element={<BbaMathsAttendancePresented />} />
        <Route path='/bbaStatisticsAttendancePresented/:id/:statistics' element={<BbaStatisticsAttendancePresented />} />
        
        <Route path='/bhmAttendance1st' element={<BhmAttendance1st stream="bhm" />} />
        <Route path='/bhmCateringsciencesAttendancePresented/:id/:cateringsciences' element={<BhmCateringsciencesAttendancePresented />} />
        <Route path='/bhmFoodpreparationAttendancePresented/:id/:foodpreparation' element={<BhmFoodpreparationAttendancePresented />} />
        <Route path='/bhmKitchenservicesAttendancePresented/:id/:kitchenservices' element={<BhmKitchenservicesAttendancePresented />} />
        
        <Route path='/bcaAttendance2nd' element={<BcaAttendance2nd stream="bca" />} />
        <Route path='/BcadbmsAttendancePresented/:id/:dbms' element={<BcadbmsAttendancePresented />} />
        <Route path='/BcanetworkingAttendancePresented/:id/:networking' element={<BcanetworkingAttendancePresented />} />
        <Route path='/BcapythonAttendancePresented/:id/:python' element={<BcapythonAttendancePresented />} />

        <Route path='/bbaAttendance2nd' element={<BbaAttendance2nd stream="bba" />} />
        <Route path='/BbamanagementAttendancePresented/:id/:management' element={<BbamanagementAttendancePresented />} />
        <Route path='/BbaretailmanagementAttendancePresented/:id/:retailmanagement' element={<BbaretailmanagementAttendancePresented />} />
        <Route path='/BbasalesAttendancePresented/:id/:sales' element={<BbasalesAttendancePresented />} />
        
        <Route path='/bhmAttendance2nd' element={<BhmAttendance2nd stream="bhm" />} />
        <Route path='/BhmcustomerserviceAttendancePresented/:id/:customerservice' element={<BhmcustomerserviceAttendancePresented />} />
        <Route path='/BhmhospitalityservicesAttendancePresented/:id/:hospitalityservices' element={<BhmhospitalityservicesAttendancePresented />} />
        <Route path='/BhmoperationsAttendancePresented/:id/:operations' element={<BhmoperationsAttendancePresented />} />
        
        <Route path='/bcaAttendance3rd' element={<BcaAttendance3rd stream="bca" />} />
        <Route path='/BcacAttendancePresented/:id/:c' element={<BcacAttendancePresented />} />
        <Route path='/BcaitAttendancePresented/:id/:it' element={<BcaitAttendancePresented />} />
        <Route path='/BcajavaAttendancePresented/:id/:java' element={<BcajavaAttendancePresented />} />

        <Route path='/bbaAttendance3rd' element={<BbaAttendance3rd stream="bba" />} />
        <Route path='/BbaconsumerbehaviourAttendancePresented/:id/:consumerbehaviour' element={<BbaconsumerbehaviourAttendancePresented />} />
        <Route path='/BbafinancialaccountingAttendancePresented/:id/:financialaccounting' element={<BbafinancialaccountingAttendancePresented />} />
        <Route path='/BbamacroeconomicsAttendancePresented/:id/:macroeconomics' element={<BbamacroeconomicsAttendancePresented />} />
        
        <Route path='/bhmAttendance3rd' element={<BhmAttendance3rd stream="bhm" />} />
        <Route path='/BhmhousekeepingAttendancePresented/:id/:housekeeping' element={<BhmhousekeepingAttendancePresented />} />
        <Route path='/BhmleadershipskillsAttendancePresented/:id/:leadershipskills' element={<BhmleadershipskillsAttendancePresented />} />
        <Route path='/BhmtourismmarketingAttendancePresented/:id/:tourismmarketing' element={<BhmtourismmarketingAttendancePresented />} />
        
        <Route path='/bcaAttendance4th' element={<BcaAttendance4th stream="bca" />} />
        <Route path='/BcadjangoAttendancePresented/:id/:django' element={<BcadjangoAttendancePresented />} />
        <Route path='/BcaflaskAttendancePresented/:id/:flask' element={<BcaflaskAttendancePresented />} />
        <Route path='/BcawebdevAttendancePresented/:id/:webdev' element={<BcawebdevAttendancePresented />} />

        <Route path='/bbaAttendance4th' element={<BbaAttendance4th stream="bba" />} />
        <Route path='/BbacalculusAttendancePresented/:id/:calculus' element={<BbacalculusAttendancePresented />} />
        <Route path='/BbacommunicationAttendancePresented/:id/:communication' element={<BbacommunicationAttendancePresented />} />
        <Route path='/BbaproductmanagementAttendancePresented/:id/:productmanagement' element={<BbaproductmanagementAttendancePresented />} />
        
        <Route path='/bhmAttendance4th' element={<BhmAttendance4th stream="bhm" />} />
        <Route path='/BhmfoodscienceAttendancePresented/:id/:foodscience' element={<BhmfoodscienceAttendancePresented />} />
        <Route path='/BhmhrmanagementAttendancePresented/:id/:hrmanagement' element={<BhmhrmanagementAttendancePresented />} />
        <Route path='/BhmpublicrelationsAttendancePresented/:id/:publicrelations' element={<BhmpublicrelationsAttendancePresented />} />
        
        <Route path='/bcaAttendance5th' element={<BcaAttendance5th stream="bca" />} />
        <Route path='/BcameanAttendancePresented/:id/:mean' element={<BcameanAttendancePresented />} />
        <Route path='/BcamernAttendancePresented/:id/:mern' element={<BcamernAttendancePresented />} />
        <Route path='/BcamysqlAttendancePresented/:id/:mysql' element={<BcamysqlAttendancePresented />} />

        <Route path='/bbaAttendance5th' element={<BbaAttendance5th stream="bba" />} />
        <Route path='/BbabusinessmathAttendancePresented/:id/:businessmath' element={<BbabusinessmathAttendancePresented />} />
        <Route path='/BbacomputingAttendancePresented/:id/:computing' element={<BbacomputingAttendancePresented />} />
        <Route path='/BbalanguagelabAttendancePresented/:id/:languagelab' element={<BbalanguagelabAttendancePresented />} />
        
        <Route path='/bhmAttendance5th' element={<BhmAttendance5th stream="bhm" />} />
        <Route path='/BhmfoodsafetyAttendancePresented/:id/:foodsafety' element={<BhmfoodsafetyAttendancePresented />} />
        <Route path='/BhmnutritionAttendancePresented/:id/:nutrition' element={<BhmnutritionAttendancePresented />} />
        <Route path='/BhmsoftskillsAttendancePresented/:id/:softskills' element={<BhmsoftskillsAttendancePresented />} />
        
        <Route path='/bcaAttendance6th' element={<BcaAttendance6th stream="bca" />} />
        <Route path='/BcaaptitudeAttendancePresented/:id/:aptitude' element={<BcaaptitudeAttendancePresented />} />
        <Route path='/BcadesigningAttendancePresented/:id/:designing' element={<BcadesigningAttendancePresented />} />
        <Route path='/BcamultimediaAttendancePresented/:id/:multimedia' element={<BcamultimediaAttendancePresented />} />

        <Route path='/bbaAttendance6th' element={<BbaAttendance6th stream="bba" />} />
        <Route path='/BbabusinessaccountingAttendancePresented/:id/:businessaccounting' element={<BbabusinessaccountingAttendancePresented />} />
        <Route path='/BbabusinesslawAttendancePresented/:id/:businesslaw' element={<BbabusinesslawAttendancePresented />} />
        <Route path='/BbasoftwarelabAttendancePresented/:id/:softwarelab' element={<BbasoftwarelabAttendancePresented />} />
        
        <Route path='/bhmAttendance6th' element={<BhmAttendance6th stream="bhm" />} />
        <Route path='/BhmhotellawAttendancePresented/:id/:hotellaw' element={<BhmhotellawAttendancePresented />} />
        <Route path='/BhmhumanresourcesAttendancePresented/:id/:humanresources' element={<BhmhumanresourcesAttendancePresented />} />
        <Route path='/BhminternationalbakingAttendancePresented/:id/:internationalbaking' element={<BhminternationalbakingAttendancePresented />} />
        
        <Route path='/facultyDelete' element={<FacultyDelete />} />
        <Route path='/facultyDeleteForm/:id' element={<FacultyDeleteForm />} />

        <Route path='/SemesterPanelDelete' element={<SemesterPanelDelete />} />

        <Route path='/adminallStudentDeleteBCA1st' element={<AllStudentsDeleteBCA1stadminDelete stream="bca"  />} />
        <Route path='/DeleteBca1st/:id' element={<DeleteBca1st />} />
        <Route path='/adminallStudentDeleteBBA1st' element={<AllStudentsDeleteBBA1stadminDelete stream="bba" />} />
        <Route path='/DeleteBba1st/:id' element={<DeleteBba1st />} />
        <Route path='/adminallStudentDeleteBHM1st' element={<AllStudentsDeleteBHM1stadminDelete stream="bhm" />} />
        <Route path='/DeleteBhm1st/:id' element={<DeleteBhm1st />} />

        <Route path='/adminallStudentDeleteBCA2nd' element={<AllStudentsDeleteBCA2ndadminDelete stream="bca"  />} />
        <Route path='/DeleteBca2nd/:id' element={<DeleteBca2nd />} />
        <Route path='/adminallStudentDeleteBBA2nd' element={<AllStudentsDeleteBBA2ndadminDelete stream="bba" />} />
        <Route path='/DeleteBba2nd/:id' element={<DeleteBba2nd />} />
        <Route path='/adminallStudentDeleteBHM2nd' element={<AllStudentsDeleteBHM2ndadminDelete stream="bhm" />} />
        <Route path='/DeleteBhm2nd/:id' element={<DeleteBhm2nd />} />

        <Route path='/adminallStudentDeleteBCA3rd' element={<AllStudentsDeleteBCA3rdadminDelete stream="bca"  />} />
        <Route path='/DeleteBca3rd/:id' element={<DeleteBca3rd />} />
        <Route path='/adminallStudentDeleteBBA3rd' element={<AllStudentsDeleteBBA3rdadminDelete stream="bba" />} />
        <Route path='/DeleteBba3rd/:id' element={<DeleteBba3rd />} />
        <Route path='/adminallStudentDeleteBHM3rd' element={<AllStudentsDeleteBHM3rdadminDelete stream="bhm" />} />
        <Route path='/DeleteBhm3rd/:id' element={<DeleteBhm3rd />} />

        <Route path='/adminallStudentDeleteBCA4th' element={<AllStudentsDeleteBCA4thadminDelete stream="bca"  />} />
        <Route path='/DeleteBca4th/:id' element={<DeleteBca4th />} />
        <Route path='/adminallStudentDeleteBBA4th' element={<AllStudentsDeleteBBA4thadminDelete stream="bba" />} />
        <Route path='/DeleteBba4th/:id' element={<DeleteBba4th />} />
        <Route path='/adminallStudentDeleteBHM4th' element={<AllStudentsDeleteBHM4thadminDelete stream="bhm" />} />
        <Route path='/DeleteBhm4th/:id' element={<DeleteBhm4th />} />

        <Route path='/adminallStudentDeleteBCA5th' element={<AllStudentsDeleteBCA5thadminDelete stream="bca"  />} />
        <Route path='/DeleteBca5th/:id' element={<DeleteBca5th />} />
        <Route path='/adminallStudentDeleteBBA5th' element={<AllStudentsDeleteBBA5thadminDelete stream="bba" />} />
        <Route path='/DeleteBba5th/:id' element={<DeleteBba5th />} />
        <Route path='/adminallStudentDeleteBHM5th' element={<AllStudentsDeleteBHM5thadminDelete stream="bhm" />} />
        <Route path='/DeleteBhm5th/:id' element={<DeleteBhm5th />} />

        <Route path='/adminallStudentDeleteBCA6th' element={<AllStudentsDeleteBCA6thadminDelete stream="bca"  />} />
        <Route path='/DeleteBca6th/:id' element={<DeleteBca6th />} />
        <Route path='/adminallStudentDeleteBBA6th' element={<AllStudentsDeleteBBA6thadminDelete stream="bba" />} />
        <Route path='/DeleteBba6th/:id' element={<DeleteBba6th />} />
        <Route path='/adminallStudentDeleteBHM6th' element={<AllStudentsDeleteBHM6thadminDelete stream="bhm" />} />
        <Route path='/DeleteBhm6th/:id' element={<DeleteBhm6th />} />

        <Route path='/passoutBca' element={<PassoutBca />} />
        <Route path='/PassoutBcaConfirmation/:id' element={<PassoutBcaConfirmation />} />
        <Route path='/passoutBba' element={<PassoutBba />} />
        <Route path='/PassoutBbaConfirmation/:id' element={<PassoutBbaConfirmation />} />
        <Route path='/passoutBhm' element={<PassoutBhm />} />
        <Route path='/PassoutBhmConfirmation/:id' element={<PassoutBhmConfirmation />} />
        
        <Route path='/NotApprovedBca' element={<NotApprovedBca />} />
        <Route path='/NotApprovedBba' element={<NotApprovedBba />} />
        <Route path='/NotApprovedBhm' element={<NotApprovedBhm />} />

        <Route path='/NotApprovedBcaConfirmation/:id' element={<NotApprovedBcaConfirmation />} />
        <Route path='/NotApprovedBbaConfirmation/:id' element={<NotApprovedBbaConfirmation />} />
        <Route path='/NotApprovedBhmConfirmation/:id' element={<NotApprovedBhmConfirmation />} />

        <Route path='/BcaNoticeUpload' element={<BcaNoticeUpload />} />
        <Route path='/BbaNoticeUpload' element={<BbaNoticeUpload />} />
        <Route path='/BhmNoticeUpload' element={<BhmNoticeUpload />} />

        <Route path='/BcaNoticeView' element={<BcaNoticeView />} />
        <Route path='/BbaNoticeView' element={<BbaNoticeView />} />
        <Route path='/BhmNoticeView' element={<BhmNoticeView />} />

        <Route path='/BcaNoticeDelete' element={<BcaNoticeDelete />} />
        <Route path='/BbaNoticeDelete' element={<BbaNoticeDelete />} />
        <Route path='/BhmNoticeDelete' element={<BhmNoticeDelete />} />
        <Route path='/BcaNoticeDeleteConfirmation/:id' element={<BcaNoticeDeleteConfirmation />} />
        <Route path='/BbaNoticeDeleteConfirmation/:id' element={<BbaNoticeDeleteConfirmation />} />
        <Route path='/BhmNoticeDeleteConfirmation/:id' element={<BhmNoticeDeleteConfirmation />} />
        
        <Route path='/error404' element={<Error />} />
        <Route path='/errorResultView' element={<ErrorResultView />} />

        <Route path='/facultyEdit/:id' element={<FacultyEditData />} />
        <Route path='/facultyEditView' element={<FacultyEditDataView />} />

        <Route path='/SemesterPanelEdit' element={<SemesterPanelEdit />} />
        <Route path='/adminallStudentDataBCA1st' element={<AllStudentsViewBCA1stadminData stream="bca"  />} />
        <Route path='/studentChangeDataBCAForm1st/:id' element={<StudentChangeDataBCAForm1st />} />
        <Route path='/adminallStudentDataBBA1st' element={<AllStudentsViewBBA1stadminData stream="bba" />} />
        <Route path='/studentChangeDataBBAForm1st/:id' element={<StudentChangeDataBBAForm1st />} />
        <Route path='/adminallStudentDataBHM1st' element={<AllStudentsViewBHM1stadminData stream="bhm" />} />
        <Route path='/studentChangeDataBHMForm1st/:id' element={<StudentChangeDataBHMForm1st />} />

        <Route path='/adminallStudentDataBCA2nd' element={<AllStudentsViewBCA2ndadminData stream="bca"  />} />
        <Route path='/studentChangeDataBCAForm2nd/:id' element={<StudentChangeDataBCAForm2nd />} />
        <Route path='/adminallStudentDataBBA2nd' element={<AllStudentsViewBBA2ndadminData stream="bba" />} />
        <Route path='/studentChangeDataBBAForm2nd/:id' element={<StudentChangeDataBBAForm2nd />} />
        <Route path='/adminallStudentDataBHM2nd' element={<AllStudentsViewBHM2ndadminData stream="bhm" />} />
        <Route path='/studentChangeDataBHMForm2nd/:id' element={<StudentChangeDataBHMForm2nd />} />

        <Route path='/adminallStudentDataBCA3rd' element={<AllStudentsViewBCA3rdadminData stream="bca"  />} />
        <Route path='/studentChangeDataBCAForm3rd/:id' element={<StudentChangeDataBCAForm3rd />} />
        <Route path='/adminallStudentDataBBA3rd' element={<AllStudentsViewBBA3rdadminData stream="bba" />} />
        <Route path='/studentChangeDataBBAForm3rd/:id' element={<StudentChangeDataBBAForm3rd />} />
        <Route path='/adminallStudentDataBHM3rd' element={<AllStudentsViewBHM3rdadminData stream="bhm" />} />
        <Route path='/studentChangeDataBHMForm3rd/:id' element={<StudentChangeDataBHMForm3rd />} />

        <Route path='/adminallStudentDataBCA4th' element={<AllStudentsViewBCA4thadminData stream="bca"  />} />
        <Route path='/studentChangeDataBCAForm4th/:id' element={<StudentChangeDataBCAForm4th />} />
        <Route path='/adminallStudentDataBBA4th' element={<AllStudentsViewBBA4thadminData stream="bba" />} />
        <Route path='/studentChangeDataBBAForm4th/:id' element={<StudentChangeDataBBAForm4th />} />
        <Route path='/adminallStudentDataBHM4th' element={<AllStudentsViewBHM4thadminData stream="bhm" />} />
        <Route path='/studentChangeDataBHMForm4th/:id' element={<StudentChangeDataBHMForm4th />} />

        <Route path='/adminallStudentDataBCA5th' element={<AllStudentsViewBCA5thadminData stream="bca"  />} />
        <Route path='/studentChangeDataBCAForm5th/:id' element={<StudentChangeDataBCAForm5th />} />
        <Route path='/adminallStudentDataBBA5th' element={<AllStudentsViewBBA5thadminData stream="bba" />} />
        <Route path='/studentChangeDataBBAForm5th/:id' element={<StudentChangeDataBBAForm5th />} />
        <Route path='/adminallStudentDataBHM5th' element={<AllStudentsViewBHM5thadminData stream="bhm" />} />
        <Route path='/studentChangeDataBHMForm5th/:id' element={<StudentChangeDataBHMForm5th />} />

        <Route path='/adminallStudentDataBCA6th' element={<AllStudentsViewBCA6thadminData stream="bca"  />} />
        <Route path='/studentChangeDataBCAForm6th/:id' element={<StudentChangeDataBCAForm6th />} />
        <Route path='/adminallStudentDataBBA6th' element={<AllStudentsViewBBA6thadminData stream="bba" />} />
        <Route path='/studentChangeDataBBAForm6th/:id' element={<StudentChangeDataBBAForm6th />} />
        <Route path='/adminallStudentDataBHM6th' element={<AllStudentsViewBHM6thadminData stream="bhm" />} />
        <Route path='/studentChangeDataBHMForm6th/:id' element={<StudentChangeDataBHMForm6th />} />


      </Routes>


      {/* <Home/> */}
    </>
  );
}

export default App;
