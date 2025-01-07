@@ .. @@
 import React from 'react';
 import { useProfilePicture } from '../../../hooks/useProfilePicture';
-import { LoadingSpinner } from '../common';
+import { HourglassLoader } from '../common';
@@ .. @@
   if (isLoading) {
     return (
       <div className={`${sizes[size]} flex items-center justify-center bg-gray-800 rounded-full`}>
-        <LoadingSpinner size="sm" />
+        <HourglassLoader size="sm" />
       </div>
     );
   }