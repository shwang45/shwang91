"use client";
import { Typography, Card, CardContent, Avatar } from "@mui/material";

const members = [
  {
    name: "Seunghoon Hwang",
    role: "Assistant Professor",
    department: "Department of Mechanical Engineering",
    group: "PI",
    image: "/img/hsh_profile.jpeg",
    email: "",
  },
  // 추후 Master, Undergraduate, Alumni 멤버 추가 가능
];

const groupOrder = ["PI", "Master", "Undergraduate", "Alumni"];

export default function LabMembersPage() {
  const groupedMembers = groupOrder.map((group) => ({
    group,
    members: members.filter((m) => m.group === group),
  }));

  return (
    <div style={{ padding: "32px" }}>
      <Typography variant="h4" gutterBottom>
        Lab Members
      </Typography>

      {groupedMembers.map(({ group, members }) => {
        // Alumni는 멤버 없으면 렌더링하지 않음
        if (group === "Alumni" && members.length === 0) return null;

        return (
          <div key={group} style={{ marginTop: 40 }}>
            <Typography variant="h5" gutterBottom>
              {group}
            </Typography>

            {members.length === 0 && (group === "Master" || group === "Undergraduate") ? (
              <Typography variant="body2" color="text.secondary">
                We are looking for passionate future {group.toLowerCase()} students to join us!
              </Typography>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
                {members.map((member, idx) => (
                  <Card
                    key={idx}
                    style={{
                      width: 250,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "16px",
                    }}
                  >
                    <Avatar
                      alt={member.name}
                      src={member.image}
                      sx={{ width: 100, height: 100, marginBottom: "12px" }}
                    />
                    <CardContent style={{ textAlign: "center" }}>
                      <Typography variant="h6">{member.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.role}
                      </Typography>
                      {member.department && (
                        <Typography variant="body2" style={{ fontSize: "12px", marginTop: 4 }}>
                          {member.department}
                        </Typography>
                      )}
                      <Typography variant="body2" style={{ fontSize: "12px" }}>
                        {member.email}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
