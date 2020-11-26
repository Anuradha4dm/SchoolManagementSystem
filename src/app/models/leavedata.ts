export interface LeaveData{
    pendingLeaveData:{
        leaveid: number;
        leavedate: string;
        leavedescription: string;
        fullname: string;
        role: string;
        userid: string;
        leavetype: string;
    }[]
}