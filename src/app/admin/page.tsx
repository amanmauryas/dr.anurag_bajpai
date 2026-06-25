"use client";

import React, { useState, useEffect } from "react";
import { 
  Calendar, 
  Clock, 
  Users, 
  ShieldAlert, 
  Trash2, 
  CheckCircle2, 
  Lock, 
  Key, 
  RefreshCw, 
  Download, 
  Search,
  Printer,
  FileSpreadsheet
} from "lucide-react";

interface BookingRecord {
  id: string;
  suffix?: string;
  name: string;
  phone: string;
  time: string;
  newPatient: string;
  uidNo?: string;
  date: string;
  clinic: string;
  timestamp: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [adminPassword, setAdminPassword] = useState("admin123");

  // Passcode change states
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passError, setPassError] = useState("");
  const [passSuccess, setPassSuccess] = useState("");

  // Schedule editor states
  const [opdDate, setOpdDate] = useState("Sunday, July 12, 2026");
  const [opdHours, setOpdHours] = useState("10:00 AM to 2:00 PM");
  const [opdWarning, setOpdWarning] = useState("Attention Patients: Pre-registration is mandatory for Dr. Anurag Bajpai's outreach OPD. Kindly request your slot in advance to avoid long queues.");
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // Bookings list state
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Load current settings
    const storedDate = localStorage.getItem("fatehpur_opd_date");
    const storedHours = localStorage.getItem("fatehpur_opd_hours");
    const storedWarning = localStorage.getItem("fatehpur_opd_warning");
    if (storedDate) setOpdDate(storedDate);
    if (storedHours) setOpdHours(storedHours);
    if (storedWarning) setOpdWarning(storedWarning);

    // Load custom admin password
    const storedPassword = localStorage.getItem("fatehpur_admin_password");
    if (storedPassword) setAdminPassword(storedPassword);

    // Load booking logs
    loadBookings();
  }, []);

  const loadBookings = () => {
    const storedBookingsStr = localStorage.getItem("fatehpur_bookings");
    if (storedBookingsStr) {
      setBookings(JSON.parse(storedBookingsStr));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const activePass = localStorage.getItem("fatehpur_admin_password") || "admin123";
    if (passwordInput === activePass) {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect Administrator Passcode. Please try again.");
    }
  };

  const handleChangePasscode = (e: React.FormEvent) => {
    e.preventDefault();
    setPassError("");
    setPassSuccess("");

    const activePass = localStorage.getItem("fatehpur_admin_password") || "admin123";
    if (currentPass !== activePass) {
      setPassError("Current passcode is incorrect.");
      return;
    }

    if (newPass.length < 6) {
      setPassError("New passcode must be at least 6 characters long.");
      return;
    }

    if (newPass !== confirmPass) {
      setPassError("New passcodes do not match.");
      return;
    }

    // Update saved passcode
    localStorage.setItem("fatehpur_admin_password", newPass);
    setAdminPassword(newPass);
    setPassSuccess("Passcode updated successfully!");

    // Clear password change inputs
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
  };

  const handleUpdateSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("fatehpur_opd_date", opdDate);
    localStorage.setItem("fatehpur_opd_hours", opdHours);
    localStorage.setItem("fatehpur_opd_warning", opdWarning);
    
    // Dispatch a custom event to notify other elements of same-tab updates
    window.dispatchEvent(new Event("opd_schedule_update"));

    setUpdateSuccess(true);
    setTimeout(() => setUpdateSuccess(false), 3000);
  };

  const handleDeleteBooking = (id: string) => {
    if (!confirm("Are you sure you want to delete this booking log?")) return;
    
    const updated = bookings.filter((b) => b.id !== id);
    localStorage.setItem("fatehpur_bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  const handleClearAllBookings = () => {
    if (!confirm("Warning: This will permanently erase all patient booking request logs. Proceed?")) return;
    localStorage.removeItem("fatehpur_bookings");
    setBookings([]);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    if (bookings.length === 0) return;
    
    // Header row
    const headers = [
      "Booking ID", 
      "Token No.", 
      "OPD Date Requested", 
      "Suffix", 
      "Patient Name", 
      "Phone Number", 
      "Timeslot Preference", 
      "New Patient?", 
      "UID No."
    ];
    
    // Data rows
    const rows = bookings.map((b, index) => [
      b.id,
      `#${index + 1}`,
      b.date,
      b.suffix || "",
      b.name,
      b.phone,
      b.time || "",
      b.newPatient,
      b.uidNo || ""
    ]);
    
    // CSV string assembly
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(val => {
        // Escape quotes and wrap in quotes if contains commas or quotes
        const stringVal = String(val);
        const cleanVal = stringVal.replace(/"/g, '""');
        return cleanVal.includes(",") || cleanVal.includes('"') || cleanVal.includes("\n") 
          ? `"${cleanVal}"` 
          : cleanVal;
      }).join(","))
    ].join("\n");
    
    // Trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Bajpai_Poly_Clinic_OPD_Bookings_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter bookings list
  const filteredBookings = bookings.filter((b) => {
    const query = searchQuery.toLowerCase();
    return (
      b.name.toLowerCase().includes(query) ||
      (b.suffix && b.suffix.toLowerCase().includes(query)) ||
      b.phone.includes(query) ||
      (b.uidNo && b.uidNo.toLowerCase().includes(query)) ||
      (b.time && b.time.toLowerCase().includes(query))
    );
  });

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="bg-slate-50 dark:bg-slate-950 min-h-[80vh] flex items-center justify-center px-4">
        <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 p-8 rounded-3xl shadow-xl max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="p-4 bg-medical-ultra-light dark:bg-medical-ultra-light/20 text-medical rounded-full w-fit mx-auto">
              <Lock className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-primary dark:text-white">Admin Dashboard</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Clinic Portal Authorization Gate</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                Passcode {adminPassword === "admin123" ? "(Default: admin123)" : ""}
              </label>
              <div className="relative">
                <Key className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter administrator code"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-medical dark:text-white"
                />
              </div>
            </div>

            {authError && (
              <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 p-3 rounded-lg flex items-center gap-1.5">
                <ShieldAlert className="h-4.5 w-4.5 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-primary dark:bg-primary-light hover:bg-primary-light text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              Verify Credentials
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-20">
      
      {/* Banner */}
      <section className="bg-primary text-white py-12 relative overflow-hidden no-print">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-medical-light block">Dashboard</span>
            <h1 className="text-3xl font-extrabold tracking-tight mt-1">
              Admin Portal
            </h1>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 border border-white/20 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition-all"
          >
            Lock Session
          </button>
        </div>
      </section>

      {/* Main Admin Settings split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Settings (40%) */}
          <div className="lg:col-span-4 space-y-6 no-print">
            
            {/* Card 1: Schedule settings */}
            <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 p-6 rounded-3xl shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-50 pb-2 flex items-center gap-2">
                <Clock className="h-5.5 w-5.5 text-medical" />
                Bajpai Poly Clinic Schedule
              </h2>

              <form onSubmit={handleUpdateSchedule} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-gray-600 dark:text-gray-400 mb-1.5">Next OPD Date</label>
                  <input
                    type="text"
                    required
                    value={opdDate}
                    onChange={(e) => setOpdDate(e.target.value)}
                    placeholder="e.g. Sunday, July 12, 2026"
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-gray-700 rounded-xl text-xs focus:ring-1 focus:ring-medical focus:outline-none dark:text-white font-semibold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-600 dark:text-gray-400 mb-1.5">OPD Timings/Hours</label>
                  <input
                    type="text"
                    required
                    value={opdHours}
                    onChange={(e) => setOpdHours(e.target.value)}
                    placeholder="e.g. 10:00 AM to 2:00 PM"
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-gray-700 rounded-xl text-xs focus:ring-1 focus:ring-medical focus:outline-none dark:text-white font-semibold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-600 dark:text-gray-400 mb-1.5">OPD Ticker Alert Banner Text</label>
                  <textarea
                    required
                    rows={3}
                    value={opdWarning}
                    onChange={(e) => setOpdWarning(e.target.value)}
                    placeholder="Enter custom ticker notification alert..."
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-gray-700 rounded-xl text-xs focus:ring-1 focus:ring-medical focus:outline-none dark:text-white font-semibold"
                  />
                </div>

                {updateSuccess && (
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 p-3 rounded-lg flex items-center gap-1.5">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                    <span>OPD schedule settings saved successfully!</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-medical hover:bg-medical-light text-white font-bold rounded-xl transition-all shadow-sm"
                >
                  Update Schedule Settings
                </button>
              </form>

              <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-2xl border border-gray-100 text-gray-550 dark:text-gray-400 text-[10px] leading-relaxed">
                <strong>System Sync:</strong> Updating here synchronizes dates dynamically on the Homepage, Booking form, Outreach portal page, and the float shortcut button instantly.
              </div>
            </div>

            {/* Card 2: Change Passcode */}
            <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 p-6 rounded-3xl shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-50 pb-2 flex items-center gap-2">
                <Lock className="h-5.5 w-5.5 text-medical" />
                Change Passcode
              </h2>

              <form onSubmit={handleChangePasscode} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-gray-600 dark:text-gray-400 mb-1.5">Current Passcode</label>
                  <input
                    type="password"
                    required
                    value={currentPass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                    placeholder="Enter current passcode"
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-gray-700 rounded-xl text-xs focus:ring-1 focus:ring-medical focus:outline-none dark:text-white font-semibold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-600 dark:text-gray-400 mb-1.5">New Passcode (min 6 chars)</label>
                  <input
                    type="password"
                    required
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    placeholder="Enter new passcode"
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-gray-700 rounded-xl text-xs focus:ring-1 focus:ring-medical focus:outline-none dark:text-white font-semibold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-600 dark:text-gray-400 mb-1.5">Confirm New Passcode</label>
                  <input
                    type="password"
                    required
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder="Re-enter new passcode"
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-gray-700 rounded-xl text-xs focus:ring-1 focus:ring-medical focus:outline-none dark:text-white font-semibold"
                  />
                </div>

                {passError && (
                  <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 p-3 rounded-lg flex items-center gap-1.5">
                    <ShieldAlert className="h-4.5 w-4.5 shrink-0" />
                    <span>{passError}</span>
                  </div>
                )}

                {passSuccess && (
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 p-3 rounded-lg flex items-center gap-1.5">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                    <span>{passSuccess}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-medical hover:bg-medical-light text-white font-bold rounded-xl transition-all shadow-sm"
                >
                  Change Admin Passcode
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Bookings log (80%) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 p-6 rounded-3xl shadow-sm space-y-6 print:w-full print:border-none print:shadow-none">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-50 pb-3 gap-3 no-print">
              <h2 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2">
                <Users className="h-5.5 w-5.5 text-medical" />
                Outreach Patient Logs ({filteredBookings.length})
              </h2>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-40 text-xs">
                  <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search logs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none dark:text-white"
                  />
                </div>
                
                <button
                  onClick={loadBookings}
                  className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-gray-500 border border-gray-150"
                  title="Reload Bookings"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
                
                {bookings.length > 0 && (
                  <>
                    <button
                      onClick={handlePrint}
                      className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-gray-700 border border-gray-150 flex items-center gap-1 text-[11px] font-bold"
                      title="Print patient list"
                    >
                      <Printer className="h-3.5 w-3.5 text-medical" />
                      <span className="hidden md:inline">Print</span>
                    </button>
                    
                    <button
                      onClick={handleExportCSV}
                      className="p-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-700 rounded-lg flex items-center gap-1 text-[11px] font-bold"
                      title="Export to Excel (CSV)"
                    >
                      <FileSpreadsheet className="h-3.5 w-3.5" />
                      <span className="hidden md:inline">Excel</span>
                    </button>

                    <button
                      onClick={handleClearAllBookings}
                      className="p-2 bg-rose-50 hover:bg-rose-100 border border-rose-100 text-rose-600 rounded-lg"
                      title="Clear All Logs"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Print Header (Visible only when printing) */}
            <div className="hidden print:block mb-6 border-b border-gray-300 pb-4">
              <h2 className="text-xl font-bold text-black">Bajpai Poly Clinic – Outreach Patient Pre-Registration List</h2>
              <p className="text-xs text-gray-600 mt-1">
                Next OPD Date: {opdDate} | Generated on: {new Date().toLocaleString()}
              </p>
            </div>

            {filteredBookings.length > 0 ? (
              <div className="overflow-x-auto text-[11px] leading-relaxed print-area">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-400 dark:text-gray-500 uppercase tracking-wider font-bold print:border-black print:text-black">
                      <th className="py-2.5 print:text-black print:font-bold">Token No.</th>
                      <th className="py-2.5 print:text-black print:font-bold">Patient Details</th>
                      <th className="py-2.5 print:text-black print:font-bold">UID No.</th>
                      <th className="py-2.5 print:text-black print:font-bold">Contact Phone</th>
                      <th className="py-2.5 print:text-black print:font-bold">Timeslot Preferred</th>
                      <th className="py-2.5 print:text-black print:font-bold">OPD Date</th>
                      <th className="py-2.5 text-right no-print">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700 dark:text-gray-300 print:divide-gray-300">
                    {filteredBookings.map((b) => {
                      const tokenNo = bookings.findIndex((x) => x.id === b.id) + 1;
                      return (
                        <tr key={b.id} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                          <td className="py-3 text-gray-500 dark:text-gray-400 font-bold print:text-black">#{tokenNo}</td>
                          <td className="py-3">
                            <strong className="text-gray-900 dark:text-white block font-bold print:text-black">
                              {b.suffix ? `${b.suffix} ` : ""}{b.name}
                            </strong>
                            <span className="print:text-gray-600 text-gray-500 dark:text-gray-400">New Patient: {b.newPatient}</span>
                          </td>
                          <td className="py-3 font-semibold print:text-black">
                            {b.uidNo || "N/A"}
                          </td>
                          <td className="py-3 font-bold text-medical print:text-black">
                            {b.phone}
                          </td>
                          <td className="py-3 print:text-black">
                            {b.time || "N/A"}
                          </td>
                          <td className="py-3 font-semibold print:text-black">
                            {b.date}
                          </td>
                          <td className="py-3 text-right no-print">
                            <button
                              onClick={() => handleDeleteBooking(b.id)}
                              className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-md"
                              title="Delete log item"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <Users className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-xs">No outreach patient booking logs found.</p>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
